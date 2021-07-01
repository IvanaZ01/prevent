import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './api/auth.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    public _authService: AuthService,
    public _router: Router,
    private _notificationService: NotificationService,
  ) {

  }

  async canActivate(): Promise<boolean> {
    if (!this._authService.isAuthenticated()) {
      this._notificationService.error('You need to be authenticated.')
      await this._router.navigateByUrl('/login');
      
      return false;
    }

    return true;
  }
}