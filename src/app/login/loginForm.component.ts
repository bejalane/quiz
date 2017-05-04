import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'loginformTmpl.component.html'
})

export class LoginFormComponent  { 
	authForm: FormGroup;
	token: any = "";

	constructor(
		private fb: FormBuilder,
		private _router: Router,
		private _loginService: LoginService
		) {
		// use FormBuilder to create a form group
		this.authForm = this.fb.group({
			'name': ['', Validators.required],
			'email': ['', Validators.compose([Validators.required])]
		});
	}

	submitForm() {
		let credentials = this.authForm.value;
		this._loginService.login(credentials)
			.subscribe(data =>{ 
				this.token = data;
				if(this.token.token){
					Cookie.set('quiz_token', this.token.token);
					Cookie.set('quiz_user', this.authForm.value.name);
					this._router.navigate(['/dashboard']);
				} else {
					alert('Sorry, the credentials you have entered are not right. Try again.')
				}
			});
	}
}