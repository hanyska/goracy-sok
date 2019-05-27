import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LastRecipesListComponent } from './last-recipes-list/last-recipes-list.component';
import { LastRecipesDetailComponent } from './last-recipes-detail/last-recipes-detail.component';
import {LastRecipesComponent} from './last-recipes.component';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LastRecipesComponent,
    LastRecipesListComponent,
    LastRecipesDetailComponent],
  exports: [
    LastRecipesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class LastRecipesModule { }
