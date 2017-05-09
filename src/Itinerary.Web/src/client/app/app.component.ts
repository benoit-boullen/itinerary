﻿import { Config } from './shared/config/env.config';
import './operators';


import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'itinerary-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
  }
}
