import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatToolbarModule
	],
	exports: [
		MatToolbarModule,
		MatSidenavModule
	]
})
export class MaterialModule { }

