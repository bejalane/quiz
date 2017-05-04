import { ModuleWithProviders, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { LoginFormComponent }  from './loginForm.component';

const loginRoute: ModuleWithProviders = RouterModule.forChild ([
 { path: '', component: LoginFormComponent}
]);

@NgModule({
  imports:      [ BrowserModule, loginRoute, ReactiveFormsModule, HttpModule ],
  declarations: [ LoginFormComponent ]
})
export class LoginModule { }