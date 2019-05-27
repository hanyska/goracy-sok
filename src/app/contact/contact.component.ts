import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../data-storage.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedImage: any = null;
  id: number;

  recipeForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nameRecipe: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
    ingredients: new FormArray([new FormGroup({
      name: new FormControl(''),
      amount: new FormControl(''),
      measure: new FormControl('sztuka'),
    })]),
    recipe: new FormControl('')
  });

  measures = ['g', 'dag', 'kg', 'sztuka', 'łyżeczka', 'łyżka', 'szklanka' ];

  constructor(private recipeService: DataStorageService,
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    if (this.recipeForm.valid) {
      const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.recipeService.storeRecipe(formValue);
            this.onResetRecipe();
          });
        })
      ).subscribe();
    }


    // this.recipeService.storeRecipe(this.recipeForm.value).subscribe(
    //   (response) => console.log(response),
    //   (error) => console.log(error)
    // );
  }

  getControls() {
      return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        measure: new FormControl('sztuka')
      })
    );
  }

  onDeleteIngredient(i: number) {
    if (i !== 0) {
      (this.recipeForm.get('ingredients') as FormArray).removeAt(i);
    } else {
      return 0;
    }
  }

  onResetRecipe() {
    this.recipeForm.reset();
  }

}
