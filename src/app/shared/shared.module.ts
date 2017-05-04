import { ModuleWithProviders, NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { HttpClientService }  from './services/httpclient.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, HttpClientService ],
  declarations: [ ]
})
export class SharedModule { }