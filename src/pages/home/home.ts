import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { SignUp } from '../signup/signup';

@Component({
  selector: 'home',
  template: `
  <ion-header>
    <ion-navbar>
      <button ion-button menuToggle>
        <ion-icon name="menu"></ion-icon>
      </button>
      <ion-title>Theta Tau @ UCLA</ion-title>
    </ion-navbar>
  </ion-header>

  <ion-content padding class="center-icon" >
    <h3>Sign-ups will be opening soon!</h3>
    <button ion-button outline (click)="openModal()">Sign Up!</button>
  </ion-content>
`
})
export class Home {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }

  openModal(){
    let modal = this.modalCtrl.create(SignUp);
    modal.present();
  }
}
