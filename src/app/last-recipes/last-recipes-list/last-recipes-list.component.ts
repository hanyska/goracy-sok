import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DataStorageService } from '../../data-storage.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'gs-last-recipes-list',
  templateUrl: './last-recipes-list.component.html',
  styleUrls: ['./last-recipes-list.component.scss'],
})
export class LastRecipesListComponent implements OnInit {
  public lastRecipes: any[];
  public detailRecipe: Recipe;

  constructor(private recipeService: DataStorageService) {}

  public ngOnInit() {
    this.getRecipes();
  }

  public getRecipes() {
    this.recipeService
      .fetchRecipe()
      .snapshotChanges()
      .pipe(map(list => list.map(item => ({ key: item.payload.key, ...item.payload.val() }))))
      .subscribe(value => {
        this.lastRecipes = value?.slice().reverse();
      });
  }

  public toggleShowDetailRecipe(recipe: Recipe) {
    this.detailRecipe = recipe;
    window.scrollTo({ left: 0, top: 2500, behavior: 'smooth' });
  }
}
