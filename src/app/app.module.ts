import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserDataComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
