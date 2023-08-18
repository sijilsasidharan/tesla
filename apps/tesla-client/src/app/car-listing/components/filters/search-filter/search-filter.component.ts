import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CarFilter } from '@data-models';
import { BehaviorSubject, debounceTime, distinctUntilChanged, tap } from 'rxjs';

@Component({
  selector: 'tesla-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Input() searchFilter$!: BehaviorSubject<CarFilter | null>
  
  searchControl = new FormControl('');

  filter$ = this.searchControl.valueChanges.pipe(
    distinctUntilChanged(),
    debounceTime(300),
    tap(search => this.searchFilter$.next(search ? {search} : null))
  );

  // ngOnInit(): void {
  //     this.searchControl.valueChanges.pipe(
  //       distinctUntilChanged(),
  //       debounceTime(300),
  //       tap(search => this.searchFilter$.next(search ? {search} : null))
  //     ).subscribe();
  // }
}
