import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrangdangkyComponent } from './trangdangky/trangdangky.component';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component';



@NgModule({
  declarations: [
                  TrangdangkyComponent, 
                  TrangdangnhapComponent],
  exports: [
                  TrangdangkyComponent,
                  TrangdangnhapComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class QuantriformModule { }
