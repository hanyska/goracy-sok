import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../data-storage.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  selectedImage: any = null;
  url: any = '';
  valid = true;

  recipeForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    nameRecipe: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
    ingredients: new FormArray([new FormGroup({
      name: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      measure: new FormControl('sztuka', Validators.required),
    })]),
    recipe: new FormControl('', Validators.required)
  });

  measures = ['g', 'dag', 'kg', 'sztuka', 'łyżeczka', 'łyżka', 'szklanka' ];

  constructor(private recipeService: DataStorageService,
              private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      const files = event.target.files;
      reader.readAsDataURL(files[0]);

      reader.onload = (img) => {
        this.url = (img.target as FileReader).result;
      };
      this.selectedImage = files[0];
    } else {
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    if (this.recipeForm.valid) {
      const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_  ${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue.imageUrl = url;
            this.recipeService.storeRecipe(formValue);
            this.onResetRecipe();
          });
        })
      ).subscribe();
    }
  }

  getControls() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        amount: new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        measure: new FormControl('sztuka', Validators.required)
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
    const control = (this.recipeForm.controls.ingredients) as FormArray;
    while (control.length > 1) {
      control.removeAt(0);
    }
    this.recipeForm.reset();
  }

}
