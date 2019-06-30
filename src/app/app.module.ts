import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MaterialModule ],
  declarations: [ AppComponent, AstronautComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
