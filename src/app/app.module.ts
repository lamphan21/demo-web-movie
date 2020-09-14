import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TrangChuModule } from './trang-chu/trang-chu.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuanTriGheModule } from './quan-tri-ghe/quan-tri-ghe.module';
import { QuantriformModule } from './Quantriform/quantriform/quantriform.module'


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TrangChuModule,
    QuanTriGheModule,
    QuantriformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
