import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MustMatchValidator } from 'src/app/validators/must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup = this._fb.group({
    role: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(4)]],
    username: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordRepeat: ['', [Validators.required, Validators.minLength(8)]],
  }, {
    validator: MustMatchValidator('password', 'passwordRepeat'),
  });

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
  notFilled = false;
  passwordsDontMatch = false;

  constructor(
    private _notificationService: NotificationService,
    private _userService: UserService,
    private _router: Router,
    private _fb: FormBuilder,
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const { role, name, username, email, password } = this.registerForm.value;

    this.register({ role, name, username, email, password });
  }

  register(user: any) {
    this._userService.create(user).subscribe(
      (success: any) => {
        this._notificationService.success('You have successfully registered.');
        this._router.navigate(['/login']);
      },
      (error: any) => {
        this._notificationService.error(error);
      }
    );
  }

  handleError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error);
  }

}
