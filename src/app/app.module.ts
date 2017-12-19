import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule,MatFormFieldModule,MatSelectModule, MatInputModule, MatButtonModule, MatIconModule, MatTableModule, MatSlideToggleModule} from '@angular/material';
import 'hammerjs';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navBar/navBar.component';
import { EmployeeComponent } from './components/employeeForm/employeeForm.component';

import { DataService } from './app.service';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
