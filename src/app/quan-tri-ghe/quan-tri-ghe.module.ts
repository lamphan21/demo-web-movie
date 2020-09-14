import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GheComponent } from './ghe/ghe.component';
import { EditDSGheComponent } from './edit-dsghe/edit-dsghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';



@NgModule({
  declarations: [
                GheComponent, 
                EditDSGheComponent, 
                DanhSachGheComponent],
  exports: [
                GheComponent,
                EditDSGheComponent,
                DanhSachGheComponent
  ],
  imports: [
    CommonModule
  ]
})
export class QuanTriGheModule { }
