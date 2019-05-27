import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FanpageComponent } from './fanpage/fanpage.component';
import { LastRecipesComponent } from './last-recipes/last-recipes.component';
import { ContactComponent } from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { WhyComponent } from './why/why.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {LastRecipesModule} from './last-recipes/last-recipes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FanpageComponent,
    ContactComponent,
    ReviewsComponent,
    FooterComponent,
    WhyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    LastRecipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
