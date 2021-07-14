import { Component, OnInit } from '@angular/core';
import {GlobalVariable} from '../../globals';

@Component({
  selector: 'app-fanpage',
  templateUrl: './fanpage.component.html',
  styleUrls: ['./fanpage.component.css']
})
export class FanpageComponent implements OnInit {
  baseApiUrl = GlobalVariable.FAN_PAGE_URL;

  constructor() { }

  ngOnInit() {
  }

}
