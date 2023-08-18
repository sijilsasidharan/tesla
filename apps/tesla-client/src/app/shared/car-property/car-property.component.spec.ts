import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarPropertyComponent } from './car-property.component';

describe('CarPropertyComponent', () => {
  let component: CarPropertyComponent;
  let fixture: ComponentFixture<CarPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarPropertyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
