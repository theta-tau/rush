import { Injectable } from '@angular/core';
import firebase from 'firebase';

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  public fireAuth: any;
  public userData: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userData = firebase.database().ref('/userData');
  }

  doLogin(email: string, password: string): any {
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  register(formData: any): any {
    console.log(formData);
    return this.fireAuth.createUserWithEmailAndPassword(formData.email, formData.password)
      .then((newUser) => {
        this.userData.child(newUser.uid).set({
          email: formData.email,
          fullname: formData.fullname,
          major: formData.major,
          year: formData.year
        });
      });
  }

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  doLogout(): any {
    return this.fireAuth.signOut();
  }

}
