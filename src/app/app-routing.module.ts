import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LastRecipesComponent} from './last-recipes/last-recipes.component';
import {WhyComponent} from './why/why.component';
import {FanpageComponent} from './fanpage/fanpage.component';
import {SendRecipeComponent} from './send-recipe/send-recipe.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'goracysok', component: WhyComponent},
  {path: 'przepisy', component: LastRecipesComponent},
  {path: 'kontakt', component: SendRecipeComponent},
  {path: 'fanpage', component: FanpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
