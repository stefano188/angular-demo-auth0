import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAuth0BuiltinComponent } from './login-auth0-builtin.component';

describe('LoginAuth0BuiltinComponent', () => {
  let component: LoginAuth0BuiltinComponent;
  let fixture: ComponentFixture<LoginAuth0BuiltinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAuth0BuiltinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAuth0BuiltinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
