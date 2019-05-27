import { Component, OnInit } from '@angular/core';
import {DataStorageService} from '../data-storage.service';

@Component({
  selector: 'app-last-recipes',
  templateUrl: './last-recipes.component.html',
  styleUrls: ['./last-recipes.component.css']
})
export class LastRecipesComponent implements OnInit {

  constructor(private recipeService: DataStorageService) { }

  ngOnInit() {
    this.recipeService.fetchRecipe();
  }
}
