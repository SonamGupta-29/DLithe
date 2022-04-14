import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ColleguesComponent } from './collegues/collegues.component';
import { ColleguesDetailsComponent } from './collegues-details/collegues-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ColleguesComponent,
    ColleguesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
