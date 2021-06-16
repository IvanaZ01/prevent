import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  roles = [
    {
      label: 'Administrator',
      value: 'administrator',
    },
    {
      label: 'User',
      value: 'user',
    },
  ];

  constructor(
    private _notificationService: NotificationService,
    private _http: UserService
  ) {}

  ngOnInit(): void {}

  register(value:object) {
    
    this._http.create(value).subscribe(
      (success) => {
        this._notificationService.success('success!');
      },
      (error) => {
        this._notificationService.error(error);
      }
    );
  }

  log(some:any){
    console.log(some)
  }
}
