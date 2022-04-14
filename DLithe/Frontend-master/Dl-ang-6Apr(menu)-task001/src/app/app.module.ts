import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SelectedMenuComponent } from './selected-menu/selected-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MenuService } from './menu.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SelectedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
