import {App, IonicApp, Platform} from 'ionic-framework/ionic';

import {SchedulesPage} from './pages/schedules/schedules';

// https://angular.io/docs/ts/latest/api/core/Type-interface.html
import {Type} from 'angular2/core';

@App({
  templateUrl: 'build/app.html',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
class MyApp {
  rootPage: Type = SchedulesPage;
  pages: Array<{title: string, icon: string, component: Type}>;

  constructor(private app: IonicApp, private platform: Platform) {
    this.initializeApp();
    this.pages = [
      { title: 'Programação', icon: 'briefcase', component: SchedulesPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // The platform is now ready. Note: if this callback fails to fire, follow
      // the Troubleshooting guide for a number of possible solutions:
      //
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //
      // First, let's hide the keyboard accessory bar (only works natively) since
      // that's a better default:
      //
      // Keyboard.setAccessoryBarVisible(false);
      //
      // For example, we might change the StatusBar color. This one below is
      // good for dark backgrounds and light text:
      // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
    });
  }

  openPage(page) {
    this.app.getComponent('leftMenu').close();
    let nav = this.app.getComponent('nav');
    nav.setRoot(page.component);
  }
}
