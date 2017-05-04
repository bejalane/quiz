import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from './room.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
	moduleId: module.id,
	selector: 'room',
	templateUrl: 'room.component.html'
})

export class RoomComponent  { 
	username:string = Cookie.get('quiz_user');
	constructor(
		private _roomService: RoomService,
		private route: ActivatedRoute
	){}

	joinRoom(){
		let id = 0;
		this._roomService.joinRoom(this.id)
			.subscribe(data =>{ 
				console.log(data);
			});
	}

	ngOnInit() {
	   this.sub = this.route.params.subscribe(params => {
	      this.id = +params['id']; // (+) converts string 'id' to a number

	      this.joinRoom();
	   });
	}


	
}