import { NgModule } from '@angular/core';
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from "../pages/error-page/error-page.component";
import { MapPageComponent } from "../pages/map-page/map-page.component";
import { ContactPageComponent } from "../pages/contact-page/contact-page.component";


const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'map',                                                                                                                                                                                                                                              
    component: MapPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'error',
    component: ErrorPageComponent
  },
  {
    path: '**',
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
