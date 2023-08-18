import { Component, Input } from '@angular/core';

@Component({
  selector: 'tesla-car-property',
  templateUrl: './car-property.component.html',
  styleUrls: ['./car-property.component.scss'],
})
export class CarPropertyComponent {
  @Input() property!: string | number;
  @Input() measure!: string;
  @Input() text!: string;
}
