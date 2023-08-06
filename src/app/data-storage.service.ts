import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from './recipe.model';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  recipeRef: AngularFireList<Recipe[]>;

  constructor(private firebase: AngularFireDatabase) {
    this.recipeRef = firebase.list<Recipe[]>('recipes', ref => ref.orderByChild('date').limitToLast(3));
  }

  fetchRecipe() {
    return this.recipeRef;
  }

  getRecipe(name: string): Observable<Recipe> {
    return this.firebase.object<Recipe>(`recipes/${name}`).valueChanges();
  }

  storeRecipe(recipes: Recipe[]) {
    this.recipeRef.push(recipes);
  }

}
