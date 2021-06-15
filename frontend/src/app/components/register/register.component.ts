import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
    private _http: HttpClient
  ) {}

  ngOnInit(): void {}

  register(value:object) {
    
    this._http.post('http://localhost:3000/user', value).subscribe(
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
