import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouteModule } from './app.route.module';

import { HeaderModule } from './modules/header/header.module';
import { FooterModule } from './modules/footer/footer.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HeaderModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
