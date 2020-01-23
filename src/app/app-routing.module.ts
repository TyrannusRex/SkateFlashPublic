import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home';
import { NewEventsComponent } from './news-events';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  { path: '**', redirectTo: 'app'},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'noticias', component: NewEventsComponent},
  { path: 'store', component: StoreComponent}
  // { path: 'store', loadChildren: './store/store.module#StoreModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
