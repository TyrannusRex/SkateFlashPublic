import { NgModule} from '@angular/core';
import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';

@NgModule({
    imports: [
        StoreRoutingModule
    ],
    providers: [],
    declarations: [
        StoreComponent
    ],
    exports: []
})
export class StoreModule {}
