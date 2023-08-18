import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsViewTypeComponent } from './cards-view-type.component';

describe('CardsViewTypeComponent', () => {
  let component: CardsViewTypeComponent;
  let fixture: ComponentFixture<CardsViewTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsViewTypeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardsViewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
