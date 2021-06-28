import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './api/auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardAdminService implements CanActivate {

  constructor(
    public _authService: AuthService,
    public _router: Router,
    private _notificationService: NotificationService,
  ) {

  }

  async canActivate(): Promise<boolean> {
    if (!(this._authService.isAuthenticated() && this._authService.isAdministrator())) {
      this._notificationService.error('You need to be administrator.')
      await this._router.navigateByUrl('/');
      
      return false;
    }

    return true;
  }
}