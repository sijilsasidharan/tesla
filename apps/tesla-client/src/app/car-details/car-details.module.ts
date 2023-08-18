import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { SliderModule } from '../shared/slider/slider.module';

import { CarDetailsRoutingModule } from './car-details-routing.module';
import { CarDetailsPageComponent } from './pages/car-details-page/car-details-page.component';
import { CarDetailsComponent } from './car-details.component';
import { CarPropertyModule } from '../shared/car-property/car-property.module';
import { ActiveVariantPipe } from './pipes/active-variant.pipe';
import { GroupByMotorPipe } from './pipes/group-by-motor.pipe';
import { PaintPickerModule } from '../shared/paint-picker/paint-picker.module';

@NgModule({
  declarations: [
    CarDetailsPageComponent,
    CarDetailsComponent,
    ActiveVariantPipe,
    GroupByMotorPipe,
  ],
  imports: [
    CommonModule,
    CarDetailsRoutingModule,
    LayoutModule,
    SliderModule,
    CarPropertyModule,
    PaintPickerModule
  ],
})
export class CarDetailsModule {}
