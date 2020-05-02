import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDescuentoPage } from './modal-descuento.page';

describe('ModalDescuentoPage', () => {
  let component: ModalDescuentoPage;
  let fixture: ComponentFixture<ModalDescuentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDescuentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDescuentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
