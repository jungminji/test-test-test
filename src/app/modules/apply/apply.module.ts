import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyRouteModule } from './apply.route.module';
import { ApplyComponent } from './containers/apply.component';

@NgModule({
  imports: [
      CommonModule,
      ApplyRouteModule
  ],
  declarations: [
      ApplyComponent
  ]
})
export class ApplyModule { }
