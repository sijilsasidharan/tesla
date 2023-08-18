import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListingComponent } from './car-listing.component';
import { CarListPageComponent } from './pages/car-list-page/car-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: CarListingComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      {
        path: 'list',
        component: CarListPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarListingRoutingModule { }
