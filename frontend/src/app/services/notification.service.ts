import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { NotificationComponent } from '../component/notification/notification.component';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {

  constructor(
    private _snackBar: MatSnackBar,
  ) {

  }

  success(message: string): void {
    this.showMessage(message, { panelClass: ['snackbar-container', 'success'] });
  }

  error(message: string): void {
    this.showMessage(message, { panelClass: ['snackbar-container', 'error'] });
  }

  warning(message: string): void {
    this.showMessage(message, { panelClass: ['snackbar-container', 'warning'] });
  }

  showMessage(message: string, config: MatSnackBarConfig): void {
    config.data = {
      message
    }

    this._snackBar.openFromComponent(NotificationComponent, config);
  }

}
