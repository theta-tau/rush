import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthService } from '../providers/auth-service';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

import { SchedulePage } from '../pages/schedule/schedule';
import { ProfilePage } from '../pages/profile/profile';
import { CheckinPage } from '../pages/checkin/checkin';

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
    Home,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    SchedulePage,
    ProfilePage,
    CheckinPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    LoginPage,
    RegisterPage,
    ResetpwdPage,
    SchedulePage,
    ProfilePage,
    CheckinPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
