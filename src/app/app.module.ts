import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { FanpageComponent } from './fanpage/fanpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LastRecipeRoutingModule } from './last-recipes/last-recipe.routes';
import { LastRecipesModule } from './last-recipes/last-recipes.module';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContactComponent } from './send-recipe/contact/contact.component';
import { RecipeFormComponent } from './send-recipe/recipe-form/recipe-form.component';
import { SendRecipeComponent } from './send-recipe/send-recipe.component';
import { WhyComponent } from './why/why.component';

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
