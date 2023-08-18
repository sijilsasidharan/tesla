import { Component, ElementRef, HostListener, ViewChildren } from '@angular/core';

@Component({
  selector: 'tesla-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  @ViewChildren('sectionEle') sections!: ElementRef<HTMLDivElement>;
  @HostListener('scroll', ['$event'])
  scroll(event: Event) {
    console.log(event, this.sections)

  }
}
