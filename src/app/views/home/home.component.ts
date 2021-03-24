import { CategoryService } from './../../global/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/global/services/navbar.service';
import { NavbarI } from 'src/app/models/Navbar.model';
import { CategoryI } from 'src/app/models/Category.model';

@Component({
  selector: 'acad-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	menu: NavbarI[] = [];
	categories: CategoryI[] = [];

	constructor(
		private _navbarSrv: NavbarService,
		private _categorySrv: CategoryService
	) { }

	ngOnInit(): void {
		this.getMenuItems();
		this.getCategories();
	}


	public async getMenuItems() {
		await this._navbarSrv.getMenu().then(res => {
			this.menu = res;
		}).catch(err => {
			console.log(err);
		});
	}

	public async getCategories(){
		await this._categorySrv.getAllCategories().then(res => {
			this.categories = res;
		}).catch(err => {
			console.error(err);
		})
	}


}

