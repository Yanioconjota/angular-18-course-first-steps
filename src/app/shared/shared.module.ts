import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { HeaderComponent } from './components/header/header.component';


const imports = [
  CommonModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatSelectModule
];

const components = [
  HeaderComponent
];

@NgModule({
  declarations: [...components],
  imports: [...imports],
  exports: [...components]
})
export class SharedModule { }
