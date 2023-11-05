import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LastRecipesDetailComponent } from './last-recipes-detail/last-recipes-detail.component';
import { LastRecipesListComponent } from './last-recipes-list/last-recipes-list.component';
import { LastRecipesComponent } from './last-recipes.component';

@NgModule({
  declarations: [LastRecipesComponent, LastRecipesListComponent, LastRecipesDetailComponent],
  exports: [LastRecipesComponent],
  imports: [CommonModule, RouterModule, FormsModule],
})
export class LastRecipesModule {}
