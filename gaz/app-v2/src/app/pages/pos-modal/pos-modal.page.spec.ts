import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosModalPage } from './pos-modal.page';

describe('PosModalPage', () => {
  let component: PosModalPage;
  let fixture: ComponentFixture<PosModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
