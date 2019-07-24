import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataListComponent } from './data-list/data-list.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { ConsoleLogDataComponent } from './console-log-data/console-log-data.component';
import { HttpDataComponent } from './http-data/http-data.component';
import { NewRequestComponent } from './new-request/new-request.component';




@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    ConsoleLogDataComponent,
    HttpDataComponent,
    NewRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxJsonViewerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
