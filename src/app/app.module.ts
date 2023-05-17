import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, NgxIndexedDBModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
