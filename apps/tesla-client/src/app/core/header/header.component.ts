import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, HostBinding, Input } from '@angular/core';
import { map } from 'rxjs';
import { FILTER_BREAK_POINTS } from '../../configs/break-points';

@Component({
  selector: 'tesla-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;
  @HostBinding('class.fixed')
  @Input() isLandingPage = true;
  // small screen check
  readonly isSmallScreen$ = this.breakpointObserver.observe(FILTER_BREAK_POINTS).pipe(
    map(breakpoint => breakpoint.matches)
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
}
