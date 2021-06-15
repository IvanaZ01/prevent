import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private _notifierService: NotifierService) {}

  success(message: string): void {
    this.showMessage(message, 'success');
  }

  error(message: string): void {
    this.showMessage(message, 'error');
  }

  warning(message: string): void {
    this.showMessage(message, 'warning');
  }

  showMessage(message: string, type: string): void {
    this._notifierService.show({
      type,
      message,
    });
  }
}
