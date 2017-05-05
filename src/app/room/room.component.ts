import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DataForSocket } from './dataForSocket';
import { RoomService } from './room.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import * as io from "socket.io-client";

@Component({
	moduleId: module.id,
	selector: 'room',
	templateUrl: 'room.component.html'
})

export class RoomComponent  { 
	username:string = Cookie.get('quiz_user');
	sub: any;
	id: number;
	socket: any = null;
	data: any;

	constructor(
		private _roomService: RoomService,
		private route: ActivatedRoute
	){
	    let sdata = new DataForSocket(this.route.snapshot.params, Cookie.get('quiz_token'));
		this.socket = io('http://quiz.slstaging.tk:6560');
		// this.socket.on('UserJoinedRoom', (sdata: DataForSocket) => {
		// 	console.log(sdata)
		// });
		// this.socket.on('UserJoinedRoom', function (sdata) {
		// 	console.log(sdata)
		// 	io.emit('message', {type:'new-message', text: message});
		// });
	}

	joinRoom(){
		let id = 0;
		this._roomService.joinRoom(this.id)
			.subscribe(data =>{ 
				console.log(data);
				let sdata = new DataForSocket(this.route.snapshot.params, Cookie.get('quiz_token'));
				console.log(sdata);
				this.socket.emit('joinRoom',sdata)
			});
	}

	ngOnInit() {
	   this.sub = this.route.params.subscribe(params => {
	      this.id = +params['id']; // (+) converts string 'id' to a number

	      this.joinRoom();
	   });
	}


	
}