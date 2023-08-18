import {
  Component,
  Input,
  AfterViewInit,
  QueryList,
  ViewChildren,
  EventEmitter,
  Output,
} from '@angular/core';
import { CarColorAndImage } from '@data-models';
import { PaintSlotComponent } from './component/paint-slot/paint-slot.component';

@Component({
  selector: 'tesla-paint-picker',
  templateUrl: './paint-picker.component.html',
  styleUrls: ['./paint-picker.component.scss'],
})
export class PaintPickerComponent implements AfterViewInit {
  private _paints!: CarColorAndImage[];
  @Input() set paints(paints: CarColorAndImage[]) {
    this._paints = paints;
    setTimeout(() => this.setActive(paints[0]));
  }
  get paints() {
    return this._paints;
  }

  @Output() paintChange = new EventEmitter();
  @ViewChildren(PaintSlotComponent)
  paintSlotComponent!: QueryList<PaintSlotComponent>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this._paints.length) {
        this.setActive(this._paints[0]);
      }
    });
  }

  setActive(paint: CarColorAndImage) {
    const color = paint[0];
    const slots = this.paintSlotComponent?.toArray();
    if (!slots) return;
    slots.forEach((slot) => {
      slot.active = false;
      if (slot.color === color) slot.active = true;
    });
    this.paintChange.emit(paint);
  }
}
