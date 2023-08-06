import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../../data-storage.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'gs-last-recipes-list',
  templateUrl: './last-recipes-list.component.html',
  styleUrls: ['./last-recipes-list.component.css'],
})
export class LastRecipesListComponent implements OnInit {
  lastRecipes;
  detailRecipe: Recipe;

  constructor(private recipeService: DataStorageService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService
      .fetchRecipe()
      .snapshotChanges()
      .pipe(
        map(list => {
          return list.map(item => {
            return { key: item.payload.key, ...item.payload.val() };
          });
        })
      )
      .subscribe(value => {
        this.lastRecipes = value;
      });
  }

  toggleShowDetailRecipe(recipe) {
    this.detailRecipe = recipe;
    window.scrollTo({ left: 0, top: 2500, behavior: 'smooth' });
  }
}
