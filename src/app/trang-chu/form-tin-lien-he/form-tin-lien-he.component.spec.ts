import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTinLienHeComponent } from './form-tin-lien-he.component';

describe('FormTinLienHeComponent', () => {
  let component: FormTinLienHeComponent;
  let fixture: ComponentFixture<FormTinLienHeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTinLienHeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTinLienHeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
