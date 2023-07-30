import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.signupForm = formBuilder.group({
      username: ['', [Validators.required, Validators.min(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.min(8)]]

    }, {
      updateOn: 'change'
    })
  }
  ngOnInit(): void {

  }
  signup() {
    console.log(this.signupForm)
    if (this.signupForm.valid) {
      const { username, email, password } = this.signupForm.value;
      this.auth.signUp(username, email, password);
      this.router.navigate(['/']);

    }
  }

}
