import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VentilatorPage } from './ventilator.page';

describe('VentilatorPage', () => {
  let component: VentilatorPage;
  let fixture: ComponentFixture<VentilatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentilatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VentilatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
