import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  loginForm: FormGroup = new FormGroup({});

  constructor(private auth: AuthService,
    private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  }
  async login() {

    console.log(this.loginForm)
    const { email, password } = this.loginForm.value;
    this.auth.signIn(email, password).subscribe(resp => {
      if (resp) {
        console.log(resp, 'login')
        this.router.navigate(['/']);
      }

    });

  }
}
