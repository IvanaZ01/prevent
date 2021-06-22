import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/api/article.service';
import { CategoryService } from 'src/app/services/api/category.service';
import { UserService } from 'src/app/services/api/user.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit {
  isNavOpen = true;
  users: any;
  articles: any;
  categories: any;
  active = 'users';
  modalActive = false;
  adminNav = [
    {name:'Home', link: '/'},
    {name:'View all', link: '/admin', active: true},
    {name:'Add new', link: '/admin/manage'},
]

  constructor(
    private _notificationService: NotificationService,
    private userHttp: UserService,
    private articleHttp: ArticleService,
    private categoryHttp: CategoryService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userHttp.getAll().subscribe(
      (users) => {
        this.users = users;
        this.active = 'users';
      },
      (error) => this._notificationService.error(error)
    );
  }

  getArticles() {
    this.articleHttp.getAll().subscribe(
      (articles) => {
        this.articles = articles;
        this.active = 'articles';
      },
      (error) => this._notificationService.error(error)
    );
  }

  getCategories() {
    this.categoryHttp.getAll().subscribe(
      (categories) => {
        this.categories = categories;
        this.active = 'categories';
      },
      (error) => this._notificationService.error(error)
    );
  }

  deleteFunc(id: string | number) {
    const conf = confirm(`Are you sure ?`);
    if (!conf) return;

    if (this.active === 'articles') {
      this.articleHttp.delete(id).subscribe((success) => {
        this._notificationService.success('Article deleted');
        this.getArticles();
      });
    } else {
      this.categoryHttp.delete(id).subscribe((success) => {
        this._notificationService.success('Category deleted');
        this.getCategories();
      });
    }
  }

  setNavState(event: any) {
    this.isNavOpen = event;
  }

  //modal functions

  //updating article

  articleModel = {
    id:0,
    name: '',
    price: 0,
    discount: 0,
    description: '',
  };

  openModalForArticle(article: {
    id:number;
    name: string;
    price: number;
    discount: number;
    description: string;
  }) {

    this.articleModel.id = article.id;
    this.articleModel.name = article.name;
    this.articleModel.price = article.price;
    this.articleModel.discount = article.discount;
    this.articleModel.description = article.description;

    this.modalActive = true;
  }

  closeModal() {
    this.modalActive = false;
  }


  updateArticle(
    id:number,
    obj: {
      name: string;
      price: number;
      discount: number;
      description: string;
    }
  ) {
      this.articleHttp.update({id, ...obj}).subscribe(
        (success) => {
          this._notificationService.success('Updated');
          this.getArticles();
          this.modalActive = false
        },
        (error) => this._notificationService.error(error)
      );

  }

  //update category


  categoryModel = {
    id:0,
    name: '',
    description: '',
  };

  openModalForCategory(category: {
    id:number;
    name: string;
    description: string;
  }){
    this.categoryModel.id = category.id
    this.categoryModel.name = category.name
    this.categoryModel.description = category.description

    this.modalActive = true;
  }

  updateCategory(
    id:number,
    obj: {
      name: string;
      price: number;
      discount: number;
      description: string;
    }
  ) {
      this.categoryHttp.update({id, ...obj}).subscribe(
        (success) => {
          this._notificationService.success('Updated');
          this.getCategories();
          this.modalActive = false
        },
        (error) => this._notificationService.error(error)
      );

  }

}
