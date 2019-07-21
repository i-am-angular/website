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

    this.slides = [
      {},
      {
        images: { // Vue
          github: {
            label: 'Contribute On Github',
            src: 'https://miro.medium.com/max/1838/1*8_fSyyWCZg9quYkqLKSlsg.png',
            href: ''
          },
          formation: {
            label: 'Formations',
            src: 'https://img.huffingtonpost.com/asset/5cd52750200000320096a5a0.jpeg?ops=scalefit_630_noupscale',
            href: ''
          },
          conf: {
            label: 'Conferences calendar',
            src: 'https://s3.amazonaws.com/revue/items/images/002/086/577/mail/19390746_10154637520598091_8432004182598006886_o.jpg?1498727193',
            href: ''
          },
          libs: {
            label: 'Libraries used with',
            src: 'https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png',
            href: ''
          },
          job: {
            label: 'Jobs',
            src: 'https://cdn-images-1.medium.com/max/280/1*oYqTFcLMerYbhTJqyQ8AQg@2x.jpeg',
            href: ''
          },
        }
      },
      {
        images: { // Angular
          github: {
            label: 'Contribute On Github',
            src: 'https://scotch-res.cloudinary.com/image/upload/dpr_3,w_350,q_auto:good,f_auto/media/1/43RVTN2dQKGJxpMDUwUu_jClEMwH.png',
            href: ''
          },
          formation: {
            label: 'Formations',
            src: 'https://www.cabaretelanguage.com/wp-content/uploads/2016/01/books.jpg',
            href: ''
          },
          conf: {
            label: 'Conferences calendar',
            src: 'https://www.ng-conf.org/wp-content/uploads/2018/11/widdisonphotography_0483-900x720.jpg',
            href: ''
          },
          libs: {
            label: 'Libraries used with',
            src: 'https://ngrx.io/assets/images/badge.svg',
            href: ''
          },
          job: {
            label: 'Jobs',
            src: 'https://media.licdn.com/dms/image/C4D1BAQFz6YdFumIriA/company-background_10000/0?e=2159024400&v=beta&t=qyDEvXpo6SgPl6Q5TrhaCAo2m1l_Rhv_eD-1e71CEEM',
            href: ''
          },
        }
      },
      {
        images: { // React
          github: {
            label: 'Contribute On Github',
            src: 'https://react.rocks/images/converted/react-faq.jpg',
            href: ''
          },
          formation: {
            label: 'Formations',
            src: 'https://content.linkedin.com/content/dam/business/marketing-solutions/global/en_US/blog/20b810.jpg',
            href: ''
          },
          conf: {
            label: 'Conferences calendar',
            src: 'https://pbs.twimg.com/media/DqYZbs9WkAELgOp.jpg',
            href: ''
          },
          libs: {
            label: 'Libraries used with',
            src: 'https://redux.js.org/img/redux-logo-twitter.png',
            href: ''
          },
          job: {
            label: 'Jobs',
            src: 'https://reactjobsboard.com/reactjobsboard.jpg',
            href: ''
          },
        }
      }
    ];
  }

  ic(newIndex) {
    this.homeService.slideIndex = newIndex;
  }

}
