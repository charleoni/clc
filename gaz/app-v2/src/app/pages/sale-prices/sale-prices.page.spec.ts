import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalePricesPage } from './sale-prices.page';

describe('SalePricesPage', () => {
  let component: SalePricesPage;
  let fixture: ComponentFixture<SalePricesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalePricesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalePricesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
