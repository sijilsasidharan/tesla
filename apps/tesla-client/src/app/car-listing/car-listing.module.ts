import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { CarListingRoutingModule } from './car-listing-routing.module';
import { CarListingComponent } from './car-listing.component';
import { CarListPageComponent } from './pages/car-list-page/car-list-page.component';
import { CardComponent } from './components/card/card.component';
import { CardsViewTypeComponent } from './components/cards-view-type/cards-view-type.component';
import { ModelFilterComponent } from './components/filters/model-filter/model-filter.component';
import { FilterContainerComponent } from './components/filters/filter-container/filter-container.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SearchFilterComponent } from './components/filters/search-filter/search-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from '../shared/slider/slider.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    CarListingComponent,
    CarListPageComponent,
    CardComponent,
    CardsViewTypeComponent,
    ModelFilterComponent,
    FilterContainerComponent,
    FiltersComponent,
    SearchFilterComponent,
  ],
  imports: [
    CommonModule,
    CarListingRoutingModule,
    ReactiveFormsModule,
    LayoutModule,
    SliderModule,
    CoreModule,
    InfiniteScrollModule,
  ],
})
export class CarListingModule {}
