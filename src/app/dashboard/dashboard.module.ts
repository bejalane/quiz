import { ModuleWithProviders, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { DashboardComponent }  from './dashboard.component';

const dashboardRoute: ModuleWithProviders = RouterModule.forChild ([
 { path: 'dashboard', component: DashboardComponent}
]);

@NgModule({
  imports:      [ BrowserModule, dashboardRoute, ReactiveFormsModule, HttpModule, FormsModule ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }