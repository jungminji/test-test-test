import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './containers/list.component';

const routes: Routes = [
    {
        path: '',
        component: ListComponent,
        children: [
            {
                path: 'apply',
                loadChildren: '../apply/apply.module#ApplyModule'
            },
            // {
            //     path: 'repay',
            //     loadChildren: ''
            // },
            // {
            //     path: 'request',
            //     loadChildren: ''
            // },
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

export class ListRouteModule {}