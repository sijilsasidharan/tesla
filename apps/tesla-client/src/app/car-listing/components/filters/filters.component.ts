import {
  Output,
  EventEmitter,
  AfterViewInit,
  Component,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FilterContainerComponent } from './filter-container/filter-container.component';
import { Observable, Subscription, combineLatest, map } from 'rxjs';
import { CarFilter } from '@data-models';

@Component({
  selector: 'tesla-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements AfterViewInit, OnDestroy {
  allFilters$!: Observable<CarFilter | null>;
  subscription = new Subscription();
  @ViewChildren(FilterContainerComponent)
  filters!: QueryList<FilterContainerComponent>;
  @Output() addFilter = new EventEmitter<CarFilter>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      const filters = combineLatest(
        this.filters.toArray().map((container) => container.filter$)
      ).pipe(
        map(filters => this.convertToFilter(filters))
      )
      .subscribe(data => this.addFilter.emit(data));
      this.subscription.add(filters);
    });
  }

  /**
   * combine array of filters to a single object
   * @param filters list of filters from child components
   * @returns reduce child filters to a single object
   */
  convertToFilter(filters: (CarFilter | null)[]): CarFilter {
    return filters.reduce((prev, curr) => {
      if (!curr) return prev;
      return { ...prev, ...curr };
    }, {}) as CarFilter;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
