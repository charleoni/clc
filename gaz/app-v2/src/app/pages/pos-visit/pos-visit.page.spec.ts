import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosVisitPage } from './pos-visit.page';

describe('PosVisitPage', () => {
  let component: PosVisitPage;
  let fixture: ComponentFixture<PosVisitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosVisitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosVisitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
