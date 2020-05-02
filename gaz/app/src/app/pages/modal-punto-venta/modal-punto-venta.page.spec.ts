import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPuntoVentaPage } from './modal-punto-venta.page';

describe('ModalPuntoVentaPage', () => {
  let component: ModalPuntoVentaPage;
  let fixture: ComponentFixture<ModalPuntoVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPuntoVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPuntoVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
