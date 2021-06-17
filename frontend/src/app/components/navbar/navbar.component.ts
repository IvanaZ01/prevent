import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  navOpen = true
  accOptionsOpen = false
  items = ['Home', 'Contact', 'Admin']
  constructor() { }

  toggleNav(){
    this.navOpen = !this.navOpen
  }
  toggleAccOptions(){
    this.accOptionsOpen = !this.accOptionsOpen
  }

  ngOnInit(){
    if(window.innerWidth < 1080){
      this.navOpen = false
    }

    window.onresize = ()=>{
      if(window.innerWidth <1080){
      this.navOpen = false
    }else{
      this.navOpen = true
    }
    };
  }

}
