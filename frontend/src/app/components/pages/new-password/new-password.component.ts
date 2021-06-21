import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  passwordsDontMatch = false;
  testId = 2

  constructor(
    private http: UserService,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  changePassword(value: any) {
    console.log(value);

    if (value.newPassword === value.repeatPassword) {
      
      this.http.update({id:this.testId, ...value}).subscribe(
        (success) => {
          this._notificationService.success('Password has been updated');
          this.passwordsDontMatch = false;
        },
        (error) => this._notificationService.error(error)
      );
    } else {
      this.passwordsDontMatch = true;
    }
  }
}
