import { Component } from '@angular/core';
import { HomeService } from './home/home.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public index: number;

  constructor(private homeService: HomeService) {
    this.homeService.slideIndex$.subscribe(value => {
      this.index = value;
    });
  }
}
