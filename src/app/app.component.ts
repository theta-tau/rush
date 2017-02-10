import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { SignUp } from '../pages/signup/signup';
import { Home } from '../pages/home/home';

import firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    firebase.initializeApp({
      apiKey: "AIzaSyBA4UkjAykOVIqF_qtSpCM_aYABPJR_6OE",
      authDomain: "rush-a5580.firebaseapp.com",
      databaseURL: "https://rush-a5580.firebaseio.com",
      storageBucket: "rush-a5580.appspot.com",
      messagingSenderId: "206295143603"
    });
    
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Sign-up', component: SignUp },
      { title: 'Home', component: Home }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
