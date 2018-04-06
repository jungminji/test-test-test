import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyDetailComponent } from './containers/apply-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ApplyDetailComponent
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

export class ApplyDetailRouteModule {}