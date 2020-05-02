import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProspectosPage } from './prospectos.page';

describe('ProspectosPage', () => {
  let component: ProspectosPage;
  let fixture: ComponentFixture<ProspectosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProspectosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProspectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
