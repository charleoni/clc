import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosVisitListPage } from './pos-visit-list.page';

describe('PosVisitListPage', () => {
  let component: PosVisitListPage;
  let fixture: ComponentFixture<PosVisitListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosVisitListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosVisitListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
