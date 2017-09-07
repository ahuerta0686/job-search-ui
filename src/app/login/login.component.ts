import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';
import { LoginService } from '../@services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;
  loginForm: FormGroup;
  loginFormSubmitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
  ) { }

  login(value, valid) {
    this.error = null;
    this.loginFormSubmitted = true;
    if (valid) {
      this.loginService.login(value.email, value.password)
        .subscribe(() => {
          this.router.navigate(['/admin']);
        }, () => {
          this.error = 'Invalid credentials.'
        });
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, CustomValidators.email]],
      password: [null, [Validators.required]]
    });
    this.loginService.init().subscribe();
  }

}
