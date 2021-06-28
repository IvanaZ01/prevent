import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-reset-password-request',
  templateUrl: './reset-password-request.component.html',
  styleUrls: ['./reset-password-request.component.scss']
})
export class ResetPasswordRequestComponent implements OnInit {
  resetPasswordRequestForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private _authService: AuthService,
    private _notificationService: NotificationService,
    private _router: Router,
    private fb: FormBuilder,
  ) {
    
  }

  ngOnInit(): void {

  }

  onSubmit() {
    const { username } = this.resetPasswordRequestForm.value;
    this.resetPasswordRequest(username);
  }

  resetPasswordRequest(username: string) {
    this._authService.resetPasswordRequest(username).subscribe(
      (res: any) => {
        this._notificationService.success('Instructions for password reset has been sent to your email.');
        this._router.navigateByUrl('/login');
      },
      (error: any) => {
        this._notificationService.error(error.error);
      }
    )
  }

  handleError(control: string, error: string) {
    return this.resetPasswordRequestForm.controls[control].hasError(error);
  }

}
