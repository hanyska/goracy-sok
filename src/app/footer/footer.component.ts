import { Component, OnInit } from '@angular/core';
import {GlobalVariable} from '../../globals';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  baseApiUrl = GlobalVariable.FAN_PAGE_URL;

  constructor() { }

  ngOnInit() {
  }

}
