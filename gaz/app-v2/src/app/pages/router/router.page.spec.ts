import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RouterPage } from './router.page';

describe('RouterPage', () => {
  let component: RouterPage;
  let fixture: ComponentFixture<RouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
