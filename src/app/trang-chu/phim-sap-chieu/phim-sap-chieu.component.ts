import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.scss']
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {

  DanhSachPhimSapChieu = [
    {TenPhim:'Godzilla', HinhAnh:'../../../assets/img/godzilla.jpg'},
    {TenPhim:'King Kong', HinhAnh:'../../../assets/img/kingkong.jpg'},
    {TenPhim:'Bán Đảo Peninsula', HinhAnh:'../../../assets/img/ban-dao-peninsula.jpg'},
    {TenPhim:'Monkey Kingdom', HinhAnh:'../../../assets/img/monkey-kingdom.jpg'},
    {TenPhim:'Venom', HinhAnh:'../../../assets/img/venom.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
  })
  }

}
