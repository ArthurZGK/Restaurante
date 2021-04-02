import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './views/category/category.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'category', component: CategoryComponent },
	{ path: 'category/:id', component: CategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
