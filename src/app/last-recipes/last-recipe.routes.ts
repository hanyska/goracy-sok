import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastRecipesDetailComponent } from './last-recipes-detail/last-recipes-detail.component';

const recipeRoutes: Routes = [
  { path: 'przepisy/:name', component: LastRecipesDetailComponent, outlet: 'secondRouter' },
];

@NgModule({
  imports: [RouterModule.forChild(recipeRoutes)],
  exports: [RouterModule],
})
export class LastRecipeRoutingModule {}
