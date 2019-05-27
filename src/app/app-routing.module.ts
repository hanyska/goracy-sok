import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LastRecipesComponent} from './last-recipes/last-recipes.component';
import {WhyComponent} from './why/why.component';
import {LastRecipesDetailComponent} from './last-recipes/last-recipes-detail/last-recipes-detail.component';
import {ContactComponent} from './contact/contact.component';
import {FanpageComponent} from './fanpage/fanpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HeaderComponent},
  {path: 'goracysok', component: WhyComponent},
  {path: 'przepisy', component: LastRecipesComponent},
  {path: 'przepisy/:name', component: LastRecipesDetailComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: 'fanpage', component: FanpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
