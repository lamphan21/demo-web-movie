import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-khuyen-mai',
  templateUrl: './khuyen-mai.component.html',
  styleUrls: ['./khuyen-mai.component.scss']
})
export class KhuyenMaiComponent implements OnInit {

  DanhSachKhuyenMai = [
    {TieuDeTinTuc:'Godzilla - 04/01', HinhAnh:'../../../assets/img/godzilla.jpg'},
    {TieuDeTinTuc:'King Kong - 04/01', HinhAnh:'../../../assets/img/kingkong.jpg'},
    {TieuDeTinTuc:'Bán Đảo Peninsula - 04/01', HinhAnh:'../../../assets/img/ban-dao-peninsula.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
