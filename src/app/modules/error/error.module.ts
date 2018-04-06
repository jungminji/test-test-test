import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './containers/error.component';
import { ErrorRouteModule } from './error.route.module';

@NgModule({
  imports: [
      CommonModule,
      ErrorRouteModule
  ],
  declarations: [
      ErrorComponent
  ]
})
export class ErrorModule { }
