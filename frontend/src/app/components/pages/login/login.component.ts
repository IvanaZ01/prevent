import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

import { AuthService } from 'src/app/services/api/auth.service';
import { NotificationService } from 'src/app/services/notification.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserStoreService } from 'src/app/stores/user-store.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false],
  });

  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _notificationService: NotificationService,
    private fb: FormBuilder,
    private _userStoreService: UserStoreService,
  ) { }

  ngOnInit(): void {

  }

  onSubmit() {
    const { username, password, rememberMe } = this.loginForm.value;

    this.login(username, password, rememberMe);
  }

  login(username: string, password: string, rememberMe: boolean = false){
    this._auth.login(username, password, rememberMe).subscribe(
      (response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response.user));
          this._userStoreService.updateUser(response.user);
          this._notificationService.success('You logged in successfully.');
          this._router.navigateByUrl('/');
        }
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }

  handleError(control: string, error: string) {
    return this.loginForm.controls[control].hasError(error);
  }
}
