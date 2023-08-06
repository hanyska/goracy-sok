import { Component, OnInit } from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {DataStorageService} from '../../data-storage.service';
import {finalize} from 'rxjs/operators';
import {formatDate} from '@angular/common';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  selectedImage: any = null;
  url: any = '';
  valid = true;

  recipeForm = new UntypedFormGroup({
    username: new UntypedFormControl('', [Validators.required]),
    email: new UntypedFormControl('', [Validators.required, Validators.email]),
    nameRecipe: new UntypedFormControl('', [Validators.required]),
    imageUrl: new UntypedFormControl('', [Validators.required]),
    ingredients: new UntypedFormArray([new UntypedFormGroup({
      name: new UntypedFormControl('', Validators.required),
      amount: new UntypedFormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      measure: new UntypedFormControl('sztuka', Validators.required),
    })]),
    recipe: new UntypedFormControl('', Validators.required),
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
      formValue.date = formatDate(new Date(), 'yyyy/MM/dd HH:mm:ss', 'en');

      const filePath = `${this.selectedImage.name.split('.').slice(0, -1).join('.')}_  ${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue.imageUrl = url;
              this.recipeService.storeRecipe(formValue);
              this.onResetRecipe();
            });
          })
        )
        .subscribe();
    }
  }



  getControls() {
    return (this.recipeForm.get('ingredients') as UntypedFormArray).controls;
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as UntypedFormArray).push(
      new UntypedFormGroup({
        name: new UntypedFormControl('', Validators.required),
        amount: new UntypedFormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
        measure: new UntypedFormControl('sztuka', Validators.required)
      })
    );
  }

  onDeleteIngredient(i: number) {
    if (i !== 0) {
      (this.recipeForm.get('ingredients') as UntypedFormArray).removeAt(i);
    } else {
      return 0;
    }
  }

  onResetRecipe() {
    const control = (this.recipeForm.controls.ingredients) as UntypedFormArray;
    while (control.length > 1) {
      control.removeAt(0);
    }
    this.url = '';
    this.selectedImage = null;
    this.recipeForm.reset();
  }

}
