import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import firebase from 'firebase';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'home',
  template: `
  <ion-title>Home</ion-title>
  <ion-buttons end>
    <button ion-button color="primary" (click)="logout()">
      <ion-icon ios="ios-exit" md="md-exit"></ion-icon>
    </button>
  </ion-buttons>
`
})
export class Home {

  constructor(public navCtrl: NavController, public authService: AuthService) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (!user) {
        navCtrl.setRoot(LoginPage);
      }
    });
  }

  logout() {
    this.authService.doLogout();
  }
}
