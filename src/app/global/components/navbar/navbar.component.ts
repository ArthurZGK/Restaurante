import { Component, Input, OnInit } from '@angular/core';
import { NavbarI } from 'src/app/models/Navbar.model';
import { ImageGeneratorUtil } from '../../utils/imageGenerator.util';

@Component({
	selector: 'azk-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	@Input() menu: NavbarI[] = [];

	constructor(
		private imageGenerator: ImageGeneratorUtil
	) { }

	ngOnInit(): void {

		const menu = JSON.parse(sessionStorage.getItem('menu'));
		if(menu){
			this.menu = menu;
		}
	}

	getIcon(suffix: number): string | false {
		return this.imageGenerator.getIcon(suffix);
	}

}

