import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userControl = new FormControl('', [Validators.required]);
  passControl = new FormControl('', [Validators.required]);
  username = '';
  pass = '';
  correctUser = '';
  correctPass = '';

  private auth: boolean;

  constructor(private router: Router, private authService: AuthService) {

    this.auth = false;

    //hints
    this.correctUser = this.authService.correctUser;
    this.correctPass = this.authService.correctPass;

  }

  ngOnInit(): void {
  }

  submit() {
    this.auth = this.authService.login(this.username, this.pass);
    if(this.auth) this.onLoginSuccess();
    else alert("Try again (use hint)");
  }

  onLoginSuccess() {
    this.router.navigate(['/dashboard']);
  }

  getErrorMessage() {
    return 'You must enter a value';
  }
}
