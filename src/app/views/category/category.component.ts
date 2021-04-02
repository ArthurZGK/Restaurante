import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/global/services/categories.service';
import { CategoryI } from 'src/app/models/Category.model';
import { DishI } from 'src/app/models/dish.model';

@Component({
	selector: 'acad-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

	id: string = '';
	dishes: DishI[] = [];
	categories: CategoryI[] = [];

	constructor(
		private _router : Router,
		private _activateRoute: ActivatedRoute,
		private _categorySrv: CategoryService
	) { }

	ngOnInit(): void {
		this._activateRoute.params.subscribe(params => {
			console.log("params: ", params)
			if(params.id){
				this.id = params.id;
				this.getDishesByCategory(params.id);
			}
		});
		const categories = JSON.parse(sessionStorage.getItem('categories'));
		
		if(!categories){
			this.getCategories();
		}else {
			this.categories = categories;
		}
	}

	async getCategories() {
		await this._categorySrv.getAllCategories().then(res => {
			this.categories = res;
		}).catch(err =>  {
			console.error(err);
		})
	}

	async getDishesByCategory(id: string){
		const res = await this._categorySrv.getAllDishesByCategory(id).then(res=>{
			this.dishes=res;
			console.log(res);
		}).catch(error=>{
			console.log(error);
		})
		
	}

	getSingleCategory(category: CategoryI): void{
		this._router.navigate(['/category/'+category._id]);
		console.log(category);
	}

}
