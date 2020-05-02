import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosListPage } from './pos-list.page';

describe('PosListPage', () => {
  let component: PosListPage;
  let fixture: ComponentFixture<PosListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
