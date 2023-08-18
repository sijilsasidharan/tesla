import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarFilter } from '@data-models';
import { CarService } from './../../../../services/car.service';
import { BehaviorSubject, tap } from 'rxjs';

@Component({
  selector: 'tesla-model-filter',
  templateUrl: './model-filter.component.html',
  styleUrls: ['./model-filter.component.scss'],
})
export class ModelFilterComponent {
  modelControl = new FormControl(null);
  models$ = this.carService.models$;
  @Input() modelFilter$!: BehaviorSubject<CarFilter | null>;
  filter$ = this.modelControl.valueChanges.pipe(
    tap(model => this.modelFilter$.next(model ? {model} : null))
  );
  constructor(private carService: CarService) {}
}
