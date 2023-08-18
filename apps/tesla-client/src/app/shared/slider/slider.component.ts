import { Component, Input } from '@angular/core';

@Component({
  selector: 'tesla-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  activeIndex = 0;
  @Input() images!: string[];

  next() {
    if (this.activeIndex === this.images.length - 1) {
      this.activeIndex = 0;
      return;
    }
    this.activeIndex++
  }

  prev() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.images.length - 1;
      return;
    }
    this.activeIndex--;
  }
}
