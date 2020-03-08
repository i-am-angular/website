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
      threshold: 40,
      keyboard: true,
      mousewheel: false,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: false
      }
    };

    this.slides = [
      {},
      {
        images: { // Vue
          github: {
            label: 'On Github',
            src: 'https://miro.medium.com/max/1838/1*8_fSyyWCZg9quYkqLKSlsg.png',
            href: 'https://github.com/vuejs/vue'
          },
          conf: {
            label: 'Conferences',
            src: 'https://s3.amazonaws.com/revue/items/images/002/086/577/mail/19390746_10154637520598091_8432004182598006886_o.jpg?1498727193',
            href: 'https://www.vuemastery.com/conferences/vueconf-us-2019'
          },
          libs: {
            label: 'Resources',
            src: 'https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png',
            href: 'https://github.com/vuejs/awesome-vue'
          },
          job: {
            label: 'Jobs',
            src: 'https://vuejs.org/images/vuejobs.png',
            href: 'https://vuejobs.com/'
          },
        }
      },
      {
        images: { // Angular
          github: {
            label: 'On Github',
            src: 'https://scotch-res.cloudinary.com/image/upload/dpr_3,w_350,q_auto:good,f_auto/media/1/43RVTN2dQKGJxpMDUwUu_jClEMwH.png',
            href: 'https://github.com/angular/angular'
          },
          conf: {
            label: 'Conferences',
            src: 'https://www.ng-conf.org/wp-content/uploads/2018/11/widdisonphotography_0483-900x720.jpg',
            href: 'https://www.youtube.com/user/ngconfvideos/videos'
          },
          libs: {
            label: 'Resources',
            src: 'https://ngrx.io/assets/images/badge.svg',
            href: 'https://github.com/PatrickJS/awesome-angular'
          },
          job: {
            label: 'Jobs',
            src: 'https://www.42jobs.io/assets/angular/default_company_logo-9ba3b5df8d62e95a7c254ee4d7a05f7cff878277016c40d1e893b96e7df64823.png',
            href: 'https://www.42jobs.io/angular'
          },
        }
      },
      {
        images: { // React
          github: {
            label: 'On Github',
            src: 'https://react.rocks/images/converted/react-faq.jpg',
            href: 'https://github.com/facebook/react'
          },
          conf: {
            label: 'Conferences',
            src: 'https://pbs.twimg.com/media/DqYZbs9WkAELgOp.jpg',
            href: 'https://www.youtube.com/channel/UCz5vTaEhvh7dOHEyd1efcaQ/videos'
          },
          libs: {
            label: 'Resources',
            src: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
            href: 'https://github.com/enaqx/awesome-react'
          },
          job: {
            label: 'Jobs',
            src: 'https://pbs.twimg.com/profile_images/955038447005249536/mgkD5oqr.jpg',
            href: 'https://www.42jobs.io/react'
          },
        }
      }
    ];
  }

  onIndexChange(newIndex) {
    this.homeService.slideIndex = newIndex;
  }

}
