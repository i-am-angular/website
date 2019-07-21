import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private index: number;

  constructor() {
    this.index = 0;
  }

  get slideIndex() {
    return this.index;
  }

  set slideIndex(val) {
    this.index = val;
  }
}
