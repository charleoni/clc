import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaVisitasPage } from './ruta-visitas.page';

describe('RutaVisitasPage', () => {
  let component: RutaVisitasPage;
  let fixture: ComponentFixture<RutaVisitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaVisitasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaVisitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
