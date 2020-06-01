import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthService } from './services/auth.service';
import { AuthTokenService } from './services/auth-token.service';
import { RouterModule } from '@angular/router';
import { LoginTokenComponent } from './login-token/login-token.component';
import { LoginAuth0BuiltinComponent } from './login-auth0-builtin/login-auth0-builtin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginTokenComponent,
    LoginAuth0BuiltinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login-token', component: LoginTokenComponent },
      { path: 'login-auth0-builtin', component: LoginAuth0BuiltinComponent }
    ])
  ],
  providers: [
    AuthService,
    AuthTokenService,
    // HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
