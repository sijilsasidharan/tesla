import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DETAILS_BREAK_POINT } from '../../../configs/break-points';
import { Observable, map } from 'rxjs';
import { CarService } from '../../../services/car.service';
import { CarColorAndImage, CarModel, CarVariant } from '@data-models';

@Component({
  selector: 'tesla-car-details-page',
  templateUrl: './car-details-page.component.html',
  styleUrls: ['./car-details-page.component.scss'],
})
export class CarDetailsPageComponent implements OnInit {

  model$!: Observable<CarModel>;
  // small screen check
  readonly isSmallScreen$ = this.breakpointObserver.observe(DETAILS_BREAK_POINT).pipe(
    map(breakpoint => !breakpoint.matches)
  );

  images: string[] = [];

  activeVariantId!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    const { modelId, variantId } = this.resolveRouterParams();
    this.activeVariantId = variantId;
    this.getModel(modelId);
  }

  getModel(modelId: string) {
    this.model$ = this.carService.getModel({ modelId }).pipe(
      map(res => {
        const { data } = res;
        if (!this.activeVariantId && data.variants.length) {
          this.activeVariantId = data.variants[0]
        }
        return data;
      })
    );
  }

  changeActiveVariant(variant: CarVariant) {
    this.activeVariantId = variant.id;
    this.changeImage(variant.color_and_images[0]);
  }

  resolveRouterParams(): { modelId: string, variantId: string } {
    const modelId = this.activatedRoute.snapshot.parent?.params['modelId'];
    const variantId = this.activatedRoute.snapshot.parent?.params['variantId'];
    return { modelId, variantId };
  }

  changeImage(colorAndImage: CarColorAndImage) {
    this.images = colorAndImage[1];
  }
}
