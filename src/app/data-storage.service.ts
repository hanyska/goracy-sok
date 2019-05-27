import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  recipeDetailList: AngularFireList <any[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.recipeDetailList = firebase.list<Recipe[]>('recipes');
  }

  fetchRecipe() {
    this.recipeDetailList = this.firebase.list<Recipe[]>('recipes');
  }

  getRecipe(name: string): Observable<Recipe> {
    return this.firebase.object<Recipe>(`recipes/${name}`).valueChanges();
  }

  storeRecipe(recipes) {
    this.recipeDetailList.push(recipes);
  }

}
