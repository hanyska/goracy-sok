import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../../data-storage.service';

@Component({
  selector: 'app-last-recipes-list',
  templateUrl: './last-recipes-list.component.html',
  styleUrls: ['./last-recipes-list.component.css']
})
export class LastRecipesListComponent implements OnInit {
  lastRecipes;

  constructor(private recipeService: DataStorageService) {}

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.recipeDetailList.snapshotChanges().subscribe( list => {
      this.lastRecipes =  list.map( item => {
        const name = item.payload.key;
        return { name, ...item.payload.val()};
      });
    });
  }

}
