import { Component, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-trangdangky',
  templateUrl: './trangdangky.component.html',
  styleUrls: ['./trangdangky.component.scss']
})
export class TrangdangkyComponent implements OnInit {

  @ViewChild('formDangKy') formDK:NgForm;

  mangNguoiDungDangKy:any[] = [];

  DangKy(value) {
    this.mangNguoiDungDangKy.push(value);
    this.formDK.reset()
  }
  CapNhat(thamso) {
    let taikhoan = thamso.getAttribute(`data-taikhoan`);
    let matkhau = thamso.getAttribute(`data-matkhau`);
    let hoten = thamso.getAttribute(`data-hoten`);
    let email = thamso.getAttribute(`data-email`);
    let soDT = thamso.getAttribute(`data-soDT`);
    let maloainguoidung = thamso.getAttribute(`data-maloainguoidung`);
    this.formDK.setValue({
      TaiKhoan:taikhoan,
      MatKhau:matkhau,
      HoTen:hoten,
      Email:email,
      SoDT:soDT,
      MaLoaiNguoiDung:maloainguoidung,
    })
  }
  constructor() { }

  ngOnInit(): void {
  }

}
