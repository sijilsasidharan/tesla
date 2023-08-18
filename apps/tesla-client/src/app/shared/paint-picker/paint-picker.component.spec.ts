import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaintPickerComponent } from './paint-picker.component';

describe('PaintPickerComponent', () => {
  let component: PaintPickerComponent;
  let fixture: ComponentFixture<PaintPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaintPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaintPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
