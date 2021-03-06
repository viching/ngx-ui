import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter.component';
// import { NgxUIModule } from '@swimlane/ngx-ui';
import { NgxUIModule } from '../../projects/swimlane/ngx-ui/src/public_api';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [BrowserModule, HttpClientModule, NgxUIModule, FormsModule, NgxDatatableModule, BrowserAnimationsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
