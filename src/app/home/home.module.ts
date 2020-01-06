import { NgModule} from '@angular/core';
// import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

NgModule({
    imports: [
        NgModule,
        HomeRoutingModule
    ],
    providers: [],
    declarations: [
        HomeComponent
    ]
});

export class HomeModule {}
