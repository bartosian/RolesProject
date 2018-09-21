import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './adding-user/personal-info/personal-info.component';
import { RolesComponent } from './adding-user/roles/roles.component';
import { SummaryComponent } from './adding-user/summary/summary.component';
import { AddingUserComponent } from './adding-user/adding-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    RolesComponent,
    SummaryComponent,
    AddingUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
