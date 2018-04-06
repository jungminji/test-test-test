import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './containers/error.component';

const routes: Routes = [
    {
        path: '',
        component: ErrorComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ErrorRouteModule {}