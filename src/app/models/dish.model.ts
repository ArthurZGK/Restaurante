export interface DishI {
	_id?: string;
	description?: string;
	image: string;
	name: string;
	offert: OffertI;
	price: number;
	stock: number;
	ingredients: string[];
};

export interface OffertI {
	isOfferted: boolean;
	totalDiscount: number;
	typeOffert: number;
}