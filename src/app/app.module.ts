import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignUp } from '../pages/signup/signup';
import { Home } from '../pages/home/home';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from '../providers/auth-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

import firebase from 'firebase';

export const firebaseConfig = {
  apiKey: "AIzaSyBA4UkjAykOVIqF_qtSpCM_aYABPJR_6OE",
  authDomain: "rush-a5580.firebaseapp.com",
  databaseURL: "https://rush-a5580.firebaseio.com",
  storageBucket: "rush-a5580.appspot.com",
  messagingSenderId: "206295143603"
};

firebase.initializeApp(firebaseConfig);

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    MyApp,
    SignUp,
    Home,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SignUp,
    Home,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
