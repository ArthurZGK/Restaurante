import { CategoryService } from './../../global/services/categories.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/global/services/navbar.service';
import { NavbarI } from 'src/app/models/Navbar.model';
import { CategoryI } from 'src/app/models/Category.model';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
		private _categorySrv: CategoryService,
		private router: Router,
		private _location: Location
	) { }

	ngOnInit(): void {
		this.getMenuItems();
		this.getCategories();
	}

	//TODO hacer esta función GLOBAL
	public async getMenuItems() {

		// await this._navbarSrv.getMenu().then(res => {
		// 	this.menu = res;
		// }).catch(err => {
		// 	console.log(err);
		// });


		const menu = JSON.parse(sessionStorage.getItem('menus'))
		if(!menu){
			await this._navbarSrv.getMenu().then(res => {
				this.menu = res;
				sessionStorage.setItem('menu', JSON.stringify(this.menu));
			}).catch(err => {
				console.log(err);
			});
		}else {
			this.menu = menu;
		}
	}

	public async getCategories(){
		await this._categorySrv.getAllCategories().then(res => {
			this.categories = res;
			sessionStorage.setItem('categories', JSON.stringify(res));
		}).catch(err => {
			console.error(err);
		})
	}

	public goToCategorySelected(category: CategoryI): void {
		this.router.navigate(['/category']);
		console.log("location: ", this._location);
		console.log("history: ", this.router.getCurrentNavigation());

	}


}
