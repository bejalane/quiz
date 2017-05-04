import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class HttpClientService {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + Cookie.get('quiz_token')); 
  }

  get(url:string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url:string, data:any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url:string, data:any) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }
}