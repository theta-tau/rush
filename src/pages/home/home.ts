import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import firebase from 'firebase';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';

import { SchedulePage } from '../schedule/schedule';
import { CheckinPage } from '../checkin/checkin';
import { ProfilePage } from '../profile/profile';
import { GiftsPage } from '../gifts/gifts';

@Component({
  selector: 'home',
  template: `
  <ion-title>Home</ion-title>
  
  <ion-content padding center>
    <h3>Welcome {{name}}!</h3>

    <br />
    <br />

    <ion-card (click)="goToSchedule()" padding tappable>
      <h1>Schedule</h1>
    </ion-card>
    <ion-card (click)="goToCheckIn()" padding tappable>
      <h1>Check-In</h1>
    </ion-card>
    <ion-card (click)="goToProfile()" padding tappable>
      <h1>Profile</h1>
    </ion-card>
    <ion-card (click)="goToGifts()" padding tappable>
      <h1>Gifts</h1>
    </ion-card>
   

    <br />
    <br />

    <button ion-button outline color="primary" (click)="logout()" block>
      Logout   &nbsp;&nbsp;
      <ion-icon ios="ios-exit" md="md-exit"></ion-icon>
    </button>

  </ion-content>
  
`
})
export class Home {

  isLoggedIn : boolean = false;
  isAdmin : boolean = false;
  name: string = "";

  constructor(public navCtrl: NavController, public authService: AuthService) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Logged In
        this.isLoggedIn = true;
        this.isAdmin = false;
        firebase.database().ref('/userData/' + user.uid).once('value')
          .then((snapshot) => {
            let userInfo = snapshot.val();
            this.name = userInfo.fullname;
        });
      }
      else {
        this.isLoggedIn = false;
        navCtrl.setRoot(LoginPage);
      }
    });
  }

  logout() {
    this.authService.doLogout();
  }

  goToSchedule() {
    this.navCtrl.push(SchedulePage);
  }

  goToCheckIn() {
    this.navCtrl.push(CheckinPage);
  }

  goToProfile() {
    this.navCtrl.push(ProfilePage);
  }

  goToGifts() {
    this.navCtrl.push(GiftsPage);
  }
}
