import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../services/auth-token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'login-token',
  templateUrl: './login-token.component.html',
  styleUrls: ['./login-token.component.css']
})
export class LoginTokenComponent implements OnInit {

  constructor(
    public authServiceToken: AuthTokenService, 
    private httpClient: HttpClient) { }

  ngOnInit() {
  }

  showProfile() {
    console.log('showProfile', this.authServiceToken.userProfile);
  }

  updateProfile() {
    
  }

  callApi() {
    console.log('calling secure api');
    const idToken = localStorage.getItem('id_token');
    if (!idToken) {
      console.log('no token found! cannot call secure API');
      return;
    }
    console.log('idToken ' + idToken);

    // let headers: HttpHeaders = new HttpHeaders();
    // headers.set('Authorization', 'Bearer ' + idToken);
    // console.log(headers.get('Authorization'));
    const headers = new HttpHeaders({ 'Authorization':  'Bearer ' + idToken});
    console.log('headers', headers.getAll('Authorization'));
    
    this.httpClient.get('http://localhost:8080/authorized', { headers: headers }).subscribe(res => {
      console.log('http call to http://localhost:8080/authorized');
      console.log('response', res);
    });
  }
}
