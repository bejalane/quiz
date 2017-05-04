import { ModuleWithProviders, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

import { RoomComponent }  from './room.component';

const roomRoute: ModuleWithProviders = RouterModule.forChild ([
 { path: 'room/:id', component: RoomComponent}
]);

@NgModule({
  imports:      [ BrowserModule, roomRoute, ReactiveFormsModule, HttpModule, FormsModule ],
  declarations: [ RoomComponent ]
})
export class RoomModule { }