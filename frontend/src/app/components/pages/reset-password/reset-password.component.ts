import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatchValidator } from 'src/app/validators/must-match.validator';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup = this._fb.group({
    password: ['', [Validators.required, Validators.minLength(4)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
  }, {
    validator: MustMatchValidator('password', 'passwordRepeat'),
  });

  username: any;

  constructor(
    private http: UserService,
    private _notificationService: NotificationService,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService,
    private _router: Router,
    private _fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this._activatedRoute.queryParams
      .subscribe(params => {
        if (!params.username) {
          this._notificationService.error('Link for reset password is not valid.');
          this._router.navigateByUrl('/login');
        } else {
          this.username = params.username;
        }
      }
    );
  }

  onSubmit() {
    const { password } = this.resetPasswordForm.value;

    this.resetPassword(this.username, password);
  }

  resetPassword(username: string, password: string) {
    this._authService.resetPassword(username, password).subscribe(
      (success: any) => {
        this._notificationService.success('Password has been successfully changed.');
        this._router.navigateByUrl('/login');
      },
      (error: any) => {
        this._notificationService.error(error.error);
      }
    );
  }

  handleError(control: string, error: string) {
    return this.resetPasswordForm.controls[control].hasError(error);
  }

}
