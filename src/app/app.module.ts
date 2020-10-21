import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
// import {MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    // MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
