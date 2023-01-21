import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { FaceSnapsModule } from './face-snaps/face-snaps.module';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { LandingPageModule } from './landing-page/landing-page.module';



@NgModule({
  declarations: [
    AppComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FaceSnapsModule,
    LandingPageModule
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
