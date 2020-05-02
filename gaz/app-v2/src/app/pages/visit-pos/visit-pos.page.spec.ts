import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisitPosPage } from './visit-pos.page';

describe('VisitPosPage', () => {
  let component: VisitPosPage;
  let fixture: ComponentFixture<VisitPosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitPosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisitPosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
