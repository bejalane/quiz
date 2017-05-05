import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoomService } from './room.service';
import { DataForSocket } from './dataForSocket';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { SocketIoModule, SocketIoConfig, Socket} from 'node_modules/ng2-socket-io/ng2-socket-io';

@Component({
	moduleId: module.id,
	selector: 'room',
	templateUrl: 'room.component.html'
})

export class RoomComponent  { 
	username:string = Cookie.get('quiz_user');
	sub: any;
	id: number;
	data: any;

	constructor(
		private _roomService: RoomService,
		private route: ActivatedRoute,
		private socket: Socket
	){}

	joinRoom(){
		this._roomService.joinRoom(this.id)
			.subscribe(data =>{ 
				console.log(data);
	            let iodata = new DataForSocket(this.route.snapshot.params, Cookie.get('quiz_token'));
	            this.socket.emit('joinRoom',iodata)
			});
	}

	ngOnInit() {
	   this.sub = this.route.params.subscribe(params => {
	      this.id = +params['id']; // (+) converts string 'id' to a number
	      this.joinRoom();
	   });
	}


	
}