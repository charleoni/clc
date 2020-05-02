import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalesChartsPage } from './sales-charts.page';

describe('SalesChartsPage', () => {
  let component: SalesChartsPage;
  let fixture: ComponentFixture<SalesChartsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesChartsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalesChartsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
