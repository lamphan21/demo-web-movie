import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.scss']
})
export class TrangdangnhapComponent implements OnInit {

  TaiKhoanKhongHopLe=['user001', 'user002'];

  constructor() { }

  formDangNhap:FormGroup;
  Dangnhap(){
    console.log(this.formDangNhap.value)
  }

  ngOnInit(): void {
    this.formDangNhap = new FormGroup({
      'TaiKhoan': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9]+'), this.checkkhonghople.bind(this)]),
      'MatKhau': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    })
  }
  checkkhonghople(control:FormControl){
    for(let account of this.TaiKhoanKhongHopLe) {
      if(control.value === account){
        return {'khongHopLe':true}
      }
    }
    return null
  }
}
