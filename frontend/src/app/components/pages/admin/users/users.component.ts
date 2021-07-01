import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'username', 'email'];

  constructor(
    private _userService: UserService,
    private _notificationService: NotificationService,
  ) {
    
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this._userService.getAll().subscribe(
      (success: any) => {
        this.users = success;
      },
      (error: HttpErrorResponse) => {
        this._notificationService.error(error.error);
      }
    )
  }
  
}
