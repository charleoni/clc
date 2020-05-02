import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntosVentaPage } from './puntos-venta.page';

describe('PuntosVentaPage', () => {
  let component: PuntosVentaPage;
  let fixture: ComponentFixture<PuntosVentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntosVentaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntosVentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
