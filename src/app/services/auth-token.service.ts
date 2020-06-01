import { Injectable } from '@angular/core';
import { Auth0Lock } from 'auth0-lock';
import { JwtHelperService } from '@auth0/angular-jwt';

// declare var Auth0Lock: any;

/* const options = {
  allowSignUp: false,
  auth: {
    responseType: "token id_token",
    redirect: false,
    sso: true,
    params: {
      scope: "openid profile email",
    },
  },
}; */

const options = {
  auth: {
    responseType: "token id_token",
    params: {
      audience: 'http://api.secure-demo.com'
    }
  },
};

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  userProfile;

  lock: Auth0Lock = new Auth0Lock(
    '3eftdOUl2HtJzb7i5xg0Um8QbCS92daE',
    'dev-v24qi5ib.eu.auth0.com',
    options
  );

  constructor() { 
    let profileStored = localStorage.getItem('profile');
    if (profileStored) {
      this.userProfile = JSON.parse(profileStored)
    }

    this.lock.on('authenticated', authResult => {
      console.log('authResult', authResult);
      localStorage.setItem('id_token', authResult.idToken);

      /* this.lock.getProfile(authResult.idToken, (error, profile) => {
        console.log('CALL TO GET PROFILE');
        if (error) {
          console.log('ERROR Getting profile', error);
          return;
        }

        console.log('GOT Profile', profile);
        let profileString = JSON.stringify(profile);
        localStorage.setItem('profile', profileString);
        this.userProfile = profile;
      }); */

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        console.log('CALL TO GET USER INFO');
        if (error) {
          console.log('ERROR Getting profile', error);
          return;
        }

        console.log('GOT Profile', profile);
        let profileString = JSON.stringify(profile);
        localStorage.setItem('profile', profileString);
        this.userProfile = profile;
      })

    });
  }

  isAuthenticated() {
    let idToken: string = localStorage.getItem('id_token');
    if (idToken && idToken.length > 0) {
      // console.log('isAuthenticated ... checking idToken ', idToken);
      let jwt = new JwtHelperService();
      // console.log('decoded token', jwt.decodeToken(idToken));
      // console.log('token is expired ', jwt.isTokenExpired(idToken));
      return !jwt.isTokenExpired(idToken);
    }
    return false;
  }

  login() {
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
  }
  
}
