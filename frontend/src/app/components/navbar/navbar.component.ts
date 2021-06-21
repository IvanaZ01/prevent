import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navOpen = true;
  accOptionsOpen = false;
  @Input('nav-links') items:any
  @Output() toggledNav: EventEmitter<boolean> =   new EventEmitter();
  
  

  constructor() {}

  toggleNav() {
    this.navOpen = !this.navOpen;
    this.toggledNav.emit(this.navOpen)
  }
  toggleAccOptions() {
    this.accOptionsOpen = !this.accOptionsOpen;
  }

  ngOnInit() {
    if (window.innerWidth < 1080) {
      this.navOpen = false;
    }

    window.onresize = () => {
      if (window.innerWidth < 1080) {
        this.navOpen = false;
      } else {
        this.navOpen = true;
      }
    };

    this.toggledNav.emit(this.navOpen)
  }
}
