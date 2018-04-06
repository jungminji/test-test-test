import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home.component';
import { HomeRouteModule } from './home.route.module';

@NgModule({
    imports: [
        CommonModule,
        HomeRouteModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {}
