import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login-auth0-builtin',
  templateUrl: './login-auth0-builtin.component.html',
  styleUrls: ['./login-auth0-builtin.component.css']
})
export class LoginAuth0BuiltinComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  showProfile(userProfile) {
    console.log('showing profile ', userProfile);
    if (this.auth.loggedIn) {
      console.log('user is logged');
      this.auth.userProfile$.subscribe(user => {
        console.log('user', user);
      });
    }
  }

}
