import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'weareangular';

  config: any;

  constructor() {
    this.config = {
      navigation: true,
      loop: true,
      pagination: true
    };
  }
}
