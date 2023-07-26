import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup = new FormGroup({});

  constructor(private auth: AuthService) {

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  }
  login() {

    console.log(this.loginForm)
    const { email, password } = this.loginForm.value;
    this.auth.signIn(email, password);
  }
}
