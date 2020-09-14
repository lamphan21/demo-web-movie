import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dien-anh',
  templateUrl: './dien-anh.component.html',
  styleUrls: ['./dien-anh.component.scss']
})
export class DienAnhComponent implements OnInit {

  DanhSachDienAnh = [
    {TieuDeTinTuc:'Godzilla - 02/01', HinhAnh:'../../../assets/img/godzilla.jpg'},
    {TieuDeTinTuc:'King Kong - 02/01', HinhAnh:'../../../assets/img/kingkong.jpg'},
    {TieuDeTinTuc:'Bán Đảo Peninsula - 02/01', HinhAnh:'../../../assets/img/ban-dao-peninsula.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
