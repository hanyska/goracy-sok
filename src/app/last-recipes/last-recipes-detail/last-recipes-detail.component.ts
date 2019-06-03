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
  recipe = {} as Recipe;

  constructor(private route: ActivatedRoute,
              private recipeService: DataStorageService) { }

  ngOnInit() {
    this.loadRecipe();
  }

  loadRecipe() {
    this.route.paramMap.subscribe( params => {
      const name2 = params.get('name');
      this.recipeService.getRecipe(name2).subscribe(value => {
        this.recipe = value;
      });
    });
  }

}
