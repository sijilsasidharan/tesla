import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaintSlotComponent } from './paint-slot.component';

describe('PaintSlotComponent', () => {
  let component: PaintSlotComponent;
  let fixture: ComponentFixture<PaintSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintSlotComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaintSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
