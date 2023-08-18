import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsPageComponent } from './pages/car-details-page/car-details-page.component';
import { CarDetailsComponent } from './car-details.component';

const routes: Routes = [
  {
    path: '',
    component: CarDetailsComponent,
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      {
        path: 'details',
        component: CarDetailsPageComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarDetailsRoutingModule { }
