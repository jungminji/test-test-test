import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyComponent } from './containers/apply.component';

const routes: Routes = [
    {
        path: '',
        component: ApplyComponent,
        children: [
            {
                path: ':id',
                loadChildren: '../apply-detail/apply-detail.module#ApplyDetailModule'
            }
        ]
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

export class ApplyRouteModule {}