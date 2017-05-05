import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpClientService } from '../shared/services/httpclient.service';
import { environment  } from '../environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RoomService {
	constructor(private _http: HttpClientService){}
	
	joinRoom(id:any): Observable<any> {
		return this._http.get(environment.url + 'room/join/' + id)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
	}

}