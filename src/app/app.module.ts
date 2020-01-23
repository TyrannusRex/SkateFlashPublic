import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './shared';
import { FooterComponent } from './shared/';
import { HomeComponent } from './home/home.component';
import { NewEventsComponent } from './news-events';
import { StoreComponent } from './store/store.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NewEventsComponent,
    StoreComponent
  ],
  imports: [
    NgbModule,
    NgxPaginationModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HttpClientModule
  ]
})
export class AppModule { }
