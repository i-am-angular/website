import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-choose-slide',
  templateUrl: './choose-slide.component.html',
  styleUrls: ['./choose-slide.component.scss']
})
export class ChooseSlideComponent implements AfterViewInit {
  title = 'wearefrontend';
  hidePokemonScene = false;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    const optionsA = {
      strings: ['Choose your pokemon !', ''],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: true,
      cursorChar: '|',
      loop: false,
      onComplete: () => {
        console.log('onComplete scene 1');
        this.hidePokemonScene = true;
        const optionsB = {
          strings: ['Oupsss! little bug ;)', 'Choose your "Framework"!! '],
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 1000,
          showCursor: true,
          cursorChar: '|',
          loop: false
        };
        const typedB = new Typed('.waf-scene-B', optionsB);
        typedA.destroy();
        this.ref.detectChanges();
      }
    };
    const typedA = new Typed('.waf-scene-A', optionsA);
  }
}
