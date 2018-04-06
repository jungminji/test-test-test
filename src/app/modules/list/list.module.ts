import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRouteModule } from './list.route.module';
import { ListComponent } from './containers/list.component';

@NgModule({
  imports: [
      CommonModule,
      ListRouteModule
  ],
  declarations: [
      ListComponent
  ]
})
export class ListModule { }
