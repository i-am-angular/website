import { Component, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  config: any;
  slides: any[];

  constructor(private homeService: HomeService, private cd: ChangeDetectorRef) {
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

  ic(newIndex) {
    this.homeService.slideIndex = newIndex;
  }

}
