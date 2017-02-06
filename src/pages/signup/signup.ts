import { Component } from '@angular/core';

import { ViewController, NavController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'signup',
  template: `
    <ion-header>
      <ion-navbar>
         <ion-icon name="ios-close" (click)="dismiss()" left></ion-icon>
        <ion-title>Spring Rush 2017 Sign-ups</ion-title>
      </ion-navbar>
    </ion-header>

    <h2>Spring Rush 2017 Signups!</h2>
    <form [formGroup]="formData" (ngSubmit)="logForm()">
      <ion-item>
        <ion-label>First Name</ion-label>
        <ion-input type="text" formControlName="firstName"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>Last Name</ion-label>
        <ion-textarea formControlName="lastName"></ion-textarea>
      </ion-item>
      <ion-item>
        <ion-label>Email</ion-label>
        <ion-textarea formControlName="email"></ion-textarea>
      </ion-item>
      <button ion-button type="submit" [disabled]="!formData.valid">Submit</button>
    </form>
  `
})
export class SignUp {

  formData;

  constructor(private formBuilder: FormBuilder, public viewCtrl: ViewController) {
    this.formData = formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
    });
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  logForm() {
    alert("You've signed up for Trump Supporters Daily! Thank you for your continued support of the United States of Shitters.");
    this.dismiss();
  }
}
