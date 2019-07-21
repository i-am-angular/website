import { Component, Input, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HomeService } from './home.service';
import { SwiperComponent } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  objectKeys = Object.keys;
  @Input() options: any;

  public index = 3;
  sub: any;

  constructor(private homeService: HomeService, private cd: ChangeDetectorRef) {
    this.sub = this.homeService.slideIndex$.subscribe(value => {
      if (value !== 0) {
        this.index = value;
        this.cd.detectChanges();
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
