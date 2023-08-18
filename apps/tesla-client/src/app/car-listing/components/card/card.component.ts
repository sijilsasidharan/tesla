import { Component, Input } from '@angular/core';
import { CarVariant, Layout } from '@data-models';
import { CarColorId, CarColorAndImage  } from '@data-models';

@Component({
  selector: 'tesla-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  colors: CarColorId[] = [];
  images: string[] = [];
  private _carDetails!: CarVariant;
  @Input() set  carDetails(carDetails: CarVariant) {
    this._carDetails = carDetails;
    this.extractColorAndImages(this._carDetails);
  };
  get carDetails() {
    return this._carDetails;
  }
  @Input() layout: Layout = 'grid';

  extractColorAndImages(carDetails: CarVariant) {
    const { color_and_images } = carDetails;
    color_and_images.forEach((colorAndImages: CarColorAndImage) => {
      const [colorId , images] = colorAndImages;
      this.colors.push(colorId);
      this.images = [...this.images, ...images ];
    });
  }

}
