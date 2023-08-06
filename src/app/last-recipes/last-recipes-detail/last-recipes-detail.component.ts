import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'gs-last-recipes-detail',
  templateUrl: './last-recipes-detail.component.html',
  styleUrls: ['./last-recipes-detail.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate(600)]),
      transition(':leave', [animate(300, style({ opacity: 0 }))]),
    ]),
  ],
})
export class LastRecipesDetailComponent {
  @Input() recipe: Recipe;
  @Output() recipeChange = new EventEmitter<Recipe>();

  closeDetailRecipe() {
    this.recipeChange.emit(undefined);
    window.scrollTo({ left: 0, top: 2000, behavior: 'smooth' });
  }

  constructor() {}
}
