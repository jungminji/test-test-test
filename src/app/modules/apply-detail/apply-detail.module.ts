import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyDetailRouteModule } from './apply-detail.route.module';
import { ApplyDetailComponent } from './containers/apply-detail.component';

@NgModule({
  imports: [
      CommonModule,
      ApplyDetailRouteModule
  ],
  declarations: [
      ApplyDetailComponent
  ]
})
export class ApplyDetailModule { }
