import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { TintucComponent } from './tintuc/tintuc.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { ReviewComponent } from './review/review.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { FormTinLienHeComponent } from './form-tin-lien-he/form-tin-lien-he.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';





@NgModule({
  declarations: [
    HeaderComponent, 
    SliderComponent, 
    LoaiPhimComponent, 
    PhimDangChieuComponent, 
    PhimSapChieuComponent, 
    ItemPhimComponent, 
    TintucComponent, 
    DienAnhComponent, 
    ReviewComponent, 
    KhuyenMaiComponent, 
    LienheComponent, 
    FormlienheComponent, 
    FormTinLienHeComponent, 
    TrangchuComponent, 
    ItemTinTucComponent, 
    ],
    exports: [
      HeaderComponent,
      SliderComponent,
      LoaiPhimComponent,
      PhimDangChieuComponent,
      PhimSapChieuComponent,
      ItemPhimComponent,
      TintucComponent,
      DienAnhComponent,
      ReviewComponent,
      KhuyenMaiComponent,
      LienheComponent,
      FormlienheComponent,
      FormTinLienHeComponent,
      TrangchuComponent,
      ItemTinTucComponent,

    ],
  imports: [
    CommonModule
  ]
})
export class TrangChuModule { }
