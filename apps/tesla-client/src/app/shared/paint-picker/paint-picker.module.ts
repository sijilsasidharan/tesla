import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaintPickerComponent } from './paint-picker.component';
import { PaintSlotComponent } from './component/paint-slot/paint-slot.component';

@NgModule({
  declarations: [PaintPickerComponent, PaintSlotComponent],
  imports: [CommonModule],
  exports: [PaintPickerComponent],
})
export class PaintPickerModule {}
