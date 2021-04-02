import { Component } from '@angular/core';
import { NavbarService } from './global/services/navbar.service';
import { NavbarI } from './models/Navbar.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu: NavbarI[] = [];

  constructor(
    private _navbarSrv: NavbarService,

  ){
    console.log('app');
    this.getMenuItems();
  }

	public async getMenuItems() {

		// await this._navbarSrv.getMenu().then(res => {
		// 	this.menu = res;
		// }).catch(err => {
		// 	console.log(err);
		// });


		const menu = JSON.parse(sessionStorage.getItem('menu'))
		if(!menu){
      console.log('menu desde servicio');
			await this._navbarSrv.getMenu().then(res => {
				this.menu = res;
				sessionStorage.setItem('menu', JSON.stringify(this.menu));
			}).catch(err => {
				console.log(err);
			});
		}else {
			this.menu = menu;
      console.log('menu desde sessiuon storage');
		}
	}


}
