import { Component } from '@angular/core';
import { CarFilter } from '@data-models';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'tesla-filter-container',
  templateUrl: './filter-container.component.html',
  styleUrls: ['./filter-container.component.scss'],
})
export class FilterContainerComponent {
  filter$ = new BehaviorSubject<CarFilter | null>(null);
}
