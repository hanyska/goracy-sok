import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'gs-last-recipes-detail',
  templateUrl: './last-recipes-detail.component.html',
  styles: [
    `
      .ingredients {
        font-size: 14px;
        text-align: left;
      }
      .underline {
        height: 1px;
        background-color: #f1802d;
        border-radius: 5px;
        margin: 32px auto 10px;
      }
    `,
  ],
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
