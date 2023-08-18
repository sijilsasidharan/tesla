import { Component, OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { Observable, map, BehaviorSubject, switchMap, combineLatest, tap } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

import { CarFilter, CarVariant, Page } from '@data-models';
import { FILTER_BREAK_POINTS } from '../../../configs/break-points';

@Component({
  selector: 'tesla-car-list-page',
  templateUrl: './car-list-page.component.html',
  styleUrls: ['./car-list-page.component.scss'],
})
export class CarListPageComponent implements OnInit {

  carVariantList$!: Observable<CarVariant[]>;
  filters = new BehaviorSubject<CarFilter | null>(null);
  page = new BehaviorSubject<Page>({ items_per_page: 10, requesed_page: 1 });
  allVariants: CarVariant[] = [];
  totalCarVariants = 0;

  // small screen check
  readonly isSmallScreen$ = this.breakpointObserver.observe(FILTER_BREAK_POINTS).pipe(
    map(breakpoint => !breakpoint.matches)
  );

  // for small device
  showFilter = false;
  saveFilters: CarFilter = {}
  
  constructor(private carService: CarService,
    private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.getCarList();
  }

  getCarList() {
    const filter$ = this.filters.asObservable().pipe(
      tap(() => {
        this.allVariants = [];
        this.page.getValue().requesed_page = 1;
      })
    );
    
    this.carVariantList$ = combineLatest([filter$, this.page.asObservable()]).pipe(
      switchMap(([filter, page]) => this.carService.getAllCars({...filter, ...page } || {})),
      map(res => {
        this.allVariants.push(...res.data);
        this.totalCarVariants = res.total;
        return res.data;
      })
    );
  }

  setFilter(filter: CarFilter) {
    this.filters.next(filter);
  }

  nextPage() {
    const { requesed_page, items_per_page } = this.page.getValue();
    if (requesed_page * items_per_page >= this.totalCarVariants) return;
    this.page.next({requesed_page: requesed_page + 1, items_per_page });
  }
}
