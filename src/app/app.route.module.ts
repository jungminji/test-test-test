import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: 'list',
        loadChildren: './modules/list/list.module#ListModule'
    },
    // {
    //     path: 'profile',
    //     loadChildren: profileModule
    // }
    {
        path: '**',
        loadChildren: './modules/error/error.module#ErrorModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule {}