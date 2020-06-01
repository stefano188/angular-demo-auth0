import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscribable, Subscription, Subject, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthTokenService } from '../services/auth-token.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  /* constructor(public auth: AuthService) { } */
  /* constructor(public authServiceToken: AuthTokenService) { } */

  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
    
  }

  /* showProfile(userProfile) {
    console.log('showing profile ', userProfile);
    if (this.auth.loggedIn) {
      console.log('user is logged');
      this.auth.userProfile$.subscribe(user => {
        console.log('user', user);
      });
    }
  } */

}
