import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { CategoryI } from 'src/app/models/Category.model';

@Injectable({
 	providedIn: 'root'
})
export class CategoryService {

  	constructor(
		private _db: AngularFirestore
	) { }

	public async getAllCategories(): Promise<CategoryI[]> {
		try {
			const response: CategoryI[] = await this._db.collection<CategoryI>('categories').get().toPromise().then(
				documents => {
					return documents.docs.map(el => {
						const _id = el.id;
						const data: CategoryI = el.data();
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
