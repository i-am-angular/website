import { Component, AfterContentInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-choose-slide',
  templateUrl: './choose-slide.component.html',
  styleUrls: ['./choose-slide.component.scss']
})
export class ChooseSlideComponent implements AfterContentInit {
  title = 'wearefrontend';

  ngAfterContentInit() {
    const options = {
      strings: ['Choose your pokemon', 'Oupsss!', 'Choose your "Framework"!! '],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 500,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };
    const typed = new Typed('.waf-typed-element', options);
  }
}
