import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryI } from 'src/app/models/Category.model';

@Component({
  selector: 'azk-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

	@Input() categories: CategoryI[] = [];
	@Output() onClick = new EventEmitter();

	constructor() { }

	ngOnInit(): void {
	}



}
