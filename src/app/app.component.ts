import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'gs-root',
  template: ` <gs-header></gs-header>
    <gs-why></gs-why>
    <gs-fanpage></gs-fanpage>
    <gs-last-recipes></gs-last-recipes>
    <gs-reviews></gs-reviews>
    <gs-send-recipe></gs-send-recipe>
    <gs-footer></gs-footer>`,
})
export class AppComponent {
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
