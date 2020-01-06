import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home';
import { NewEventsComponent } from './news-events';


const routes: Routes = [
  { path: '**', redirectTo: 'app'},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'noticias', component: NewEventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
