import { Component } from '@angular/core';

import { ViewController } from 'ionic-angular';

import { Facebook } from 'ionic-native';
import firebase from 'firebase';

@Component({
  selector: 'signup',
  template: `
    <ion-header>
      <ion-navbar>
         <ion-icon name="ios-close" (click)="dismiss()" left></ion-icon>
        <ion-title>Spring Rush 2017 Sign-ups</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content padding>

      <button ion-button outline center (click)="facebookLogin()">
        Log In with Facebook
      </button>

      <ion-card *ngIf="userProfile">
        <img [src]="userProfile.photoURL"/>
        <ion-card-content>
          <ion-card-title>
            {{ userProfile.displayName }}
          </ion-card-title>
          <p>
            The UID for this new user is {{userProfile.uid}} and the email is {{userProfile.email}}
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class SignUp {

  userProfile: any = null;

  constructor(public viewCtrl: ViewController) {}

  facebookLogin(){
    Facebook.login(['email']).then( (response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
      .then((success) => {
        console.log("Firebase success: " + JSON.stringify(success));
        this.userProfile = success;
      })
      .catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });

    }).catch((error) => { console.log(error) });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
