import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPubSubModule } from '@pscoped/ngx-pub-sub';

/* Services */
import { PersonsService } from "../providers/persons/persons.service";
import { NetworkService } from "../providers/network/network.service";

/* Components*/
import { ListComponent } from '../components/list/list.component';

/* Pages*/
import { MapPageComponent } from '../pages/map-page/map-page.component';
import { ErrorPageComponent } from '../pages/error-page/error-page.component';
import { HomePageComponent } from '../pages/home-page/home-page.component';
import { ContactPageComponent } from '../pages/contact-page/contact-page.component';
/**
 * NgModule that includes all Material modules that are required to serve
 * the Plunker.
 */

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HomePageComponent,
    ErrorPageComponent,
    MapPageComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatNativeDateModule,

    HttpClientModule,
    NgxPubSubModule
  ],
  providers: [
    NetworkService,
    PersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
