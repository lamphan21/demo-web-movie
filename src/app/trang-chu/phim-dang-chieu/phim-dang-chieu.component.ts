import { Component, OnInit, AfterViewInit } from '@angular/core';
import $ from 'jquery';
declare var $:any

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {



  DanhSachPhimDangChieu = [
    {TenPhim:'The Walking Dead', HinhAnh:'../../../assets/img/the-walking-dead.jpg'},
    {TenPhim:'Fredinand', HinhAnh:'../../../assets/img/Fredinand.jpg'},
    {TenPhim:'Avenger EndGame', HinhAnh:'../../../assets/img/avenger-endgame.jpg'},
    {TenPhim:'Justice League', HinhAnh:'../../../assets/img/Justice-League-1.jpg'},
    {TenPhim:'Spider Man', HinhAnh:'../../../assets/img/spider-man.jpg'},
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
