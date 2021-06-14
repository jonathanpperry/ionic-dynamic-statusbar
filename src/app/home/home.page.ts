import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import {
  StatusBarAnimation,
  StatusBarBackgroundColorOptions,
  StatusBarStyle,
} from '@capacitor/status-bar';
import { isPlatform } from '@ionic/core';
const { StatusBar } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visible = true;
  overlays = false;

  constructor() {}

  ionViewWillEnter() {
    if (isPlatform('mobile')) {
      StatusBar.setStyle({ style: StatusBarStyle.Dark });
    }
  }

  toggleVisible() {
    if (this.visible) {
      StatusBar.hide({ animation: StatusBarAnimation.Slide });
    } else {
      StatusBar.show({ animation: StatusBarAnimation.Fade });
    }
    this.visible = !this.visible;
  }

  changeStyle() {
    const opts: StatusBarBackgroundColorOptions = {
      color: '#' + Math.floor(Math.random() * 16777215).toString(16),
    };
    StatusBar.setBackgroundColor(opts);
  }

  toggleOverlays() {
    this.overlays = !this.overlays;
    StatusBar.setOverlaysWebView({ overlay: this.overlays });
  }
}
