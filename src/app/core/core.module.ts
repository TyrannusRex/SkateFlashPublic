import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors';
import { ApiService, StoreProductsService} from './services';

@NgModule({
    imports: [
        CommonModule
        // NgModule
    ],
    declarations : [],
    exports: [],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptor, multi: true},
        ApiService,
        StoreProductsService
    ]
})
export class CoreModule {}
