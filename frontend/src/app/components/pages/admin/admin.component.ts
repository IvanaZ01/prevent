import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  isNavOpen = true;
  constructor() {}

  ngOnInit(): void {}

  setNavState(event: any) {
    this.isNavOpen = event;
  }
}
