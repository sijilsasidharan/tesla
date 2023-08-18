import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'tesla-paint-slot',
  templateUrl: './paint-slot.component.html',
  styleUrls: ['./paint-slot.component.scss'],
})
export class PaintSlotComponent {
  active = false;
  @Input() color!: string;
  @Output() activate = new EventEmitter();
}
