import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataStorageService} from '../../data-storage.service';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-last-recipes-detail',
  templateUrl: './last-recipes-detail.component.html',
  styleUrls: ['./last-recipes-detail.component.css']
})
export class LastRecipesDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: DataStorageService) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    const name = this.route.snapshot.params['name'];
    console.log(name);

    this.recipeService.getRecipe(name).subscribe(
      value => {
        this.recipe = value;
      });
  }

}
