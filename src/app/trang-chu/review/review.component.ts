import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  DanhSachReview = [
    {TieuDeTinTuc:'Godzilla - 03/01', HinhAnh:'../../../assets/img/godzilla.jpg'},
    {TieuDeTinTuc:'King Kong - 03/01', HinhAnh:'../../../assets/img/kingkong.jpg'},
    {TieuDeTinTuc:'Bán Đảo Peninsula - 03/01', HinhAnh:'../../../assets/img/ban-dao-peninsula.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
