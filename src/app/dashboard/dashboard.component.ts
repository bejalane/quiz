import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DashboardService } from './dashboard.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html'
})

export class DashboardComponent  { 
	username:string = Cookie.get('quiz_user');
	constructor(
		private _dashboardService: DashboardService, 
		private _router: Router
	){}

	createRoom(){
		this._dashboardService.createRoom()
			.subscribe(data =>{ 
				console.log(data);
				this._router.navigate(['/room/' + data.roomID]);
			});
	}
}