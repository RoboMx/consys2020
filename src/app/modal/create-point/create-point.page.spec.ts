import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatePointPage } from './create-point.page';

describe('CreatePointPage', () => {
  let component: CreatePointPage;
  let fixture: ComponentFixture<CreatePointPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePointPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePointPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
