import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavbarI } from 'src/app/models/Navbar.model';

@Injectable({
 	providedIn: 'root'
})
export class NavbarService {

  	constructor(
		private _db: AngularFirestore
	) { }

	public async getMenu(): Promise<NavbarI[]> {
		try {
			const response: NavbarI[] = await this._db.collection<NavbarI>('navbarmenu').get().toPromise().then(
				documents => {
					return documents.docs.map(el => {
						const _id = el.id;
						const data: NavbarI = el.data();
						return {_id, ...data}
					});
				}
			);
			return response;
		} catch (error) {
			return error;
		}
	}
}
