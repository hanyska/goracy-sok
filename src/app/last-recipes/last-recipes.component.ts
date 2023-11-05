import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'gs-last-recipes',
  template: ` <div id="last-recipe" class="offset wow slideInLeft" data-wow-offset="200" #recipes>
    <div class="jumbotron">
      <div class="narrow text-center">
        <div class="col-12">
          <h3 class="heading">OSTATNIE PRZEPISY</h3>
          <div class="heading-underline"></div>
        </div>
        <gs-last-recipes-list></gs-last-recipes-list>
      </div>
    </div>
  </div>`,
  styles: [
    `
      .jumbotron {
        background-color: #123740;
        color: white;
        border-radius: 0;
        margin: 0;
      }
    `,
  ],
})
export class LastRecipesComponent implements OnInit {
  constructor(private recipeService: DataStorageService) {}

  ngOnInit() {
    this.recipeService.fetchRecipe();
  }
}
