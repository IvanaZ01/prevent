import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { CategoryService } from 'src/app/services/api/category.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-manage.component.html',
  styleUrls: ['./admin-manage.component.scss'],
})
export class AdminComponent implements OnInit {
  isNavOpen = true;
  adminNav = [
    {name:'Home', link: '/'},
    {name:'View all', link: '/admin'},
    {name:'Add new', link: '/admin/manage'}
]
  constructor(
    private Ahttp: ArticleService, 
    private _notificationService: NotificationService,
    private Chttp: CategoryService
    ) {}
  
  ngOnInit(): void {}

  setNavState(event: any) {
    this.isNavOpen = event;
  }

  validateArticle(valid:boolean | null, fa:any, form:object){
    if(!valid){
      console.log(fa);
    }else{
      this.addArticle(form)
    }
  }

  validateCategory(valid:boolean | null, fc:any, form:object){
    if(!valid){
      console.log(fc);
    }else{
      this.addCategory(form)
    }
  }

  addArticle(form:object){
    
    this.Ahttp.create(form).subscribe(
      success =>{
        this._notificationService.success('Success!')
      },
      (error) => {
        this._notificationService.error(error);
      }
    )
    
  }

  addCategory(form:object){
    this.Chttp.create(form).subscribe(
      success =>{
        this._notificationService.success('Success!')
      },
      (error) => {
        this._notificationService.error(error);
      }
    )
    
  }
}

