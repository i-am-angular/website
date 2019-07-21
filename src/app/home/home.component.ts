import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'weareangular';

  config: any;

  constructor(private homeService: HomeService) {
    this.config = {
      loop: true,
      keyboard: true,
      mousewheel: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
      }
    };
  }

  test(newIndex) {
    this.homeService.slideIndex = newIndex;
  }
}
