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

	public async getAllDishesByCategory(id: string): Promise<any[]> {
		try {
			const response = await this._db.collection('dishes').ref.where('categories', 'array-contains', id).get().then(documetns => {
				return documetns.docs.map(el => {
					const _id = el.id;
					const data: any = el.data();
					return {_id, ...data};
				});
			});
			return response;
		} catch (error) {
			return error;
		}
	}

}
