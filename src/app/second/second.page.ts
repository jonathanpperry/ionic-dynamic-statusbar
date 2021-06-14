import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {
  StatusBarAnimation,
  StatusBarBackgroundColorOptions,
  StatusBarStyle,
} from '@capacitor/status-bar';
import { isPlatform } from '@ionic/core';
const { StatusBar } = Plugins;

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  constructor() {}

  ionViewWillEnter() {
    if (isPlatform('mobile')) {
      StatusBar.setStyle({ style: StatusBarStyle.Light });
    }
  }
}
