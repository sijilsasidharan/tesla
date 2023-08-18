import { Component, Output, EventEmitter } from '@angular/core';
import { Layout } from '@data-models';

@Component({
  selector: 'tesla-cards-view-type',
  templateUrl: './cards-view-type.component.html',
  styleUrls: ['./cards-view-type.component.scss'],
})
export class CardsViewTypeComponent {
  layout: Layout = 'grid';
  @Output() openFilter = new EventEmitter();
  @Output() scrolledDown = new EventEmitter();
}
