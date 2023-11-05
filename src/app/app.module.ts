import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FanpageComponent } from './fanpage/fanpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { WhyComponent } from './why/why.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { LastRecipesModule } from './last-recipes/last-recipes.module';
import { LastRecipeRoutingModule } from './last-recipes/last-recipe-routing.module';
import { SendRecipeComponent } from './send-recipe/send-recipe.component';
import { RecipeFormComponent } from './send-recipe/recipe-form/recipe-form.component';
import { ContactComponent } from './send-recipe/contact/contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FanpageComponent,
    ReviewsComponent,
    FooterComponent,
    WhyComponent,
    SendRecipeComponent,
    RecipeFormComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LastRecipeRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    LastRecipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
