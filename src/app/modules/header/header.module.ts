import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './containers/header.component';
import { HeaderBrandComponent } from './components/brand/brand.component';
import { HeaderBtnMenuComponent } from './components/btn-menu/btn-menu.component';
import { HeaderTextMenuComponent } from './components/text-menu/text-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        HeaderBrandComponent,
        HeaderBtnMenuComponent,
        HeaderTextMenuComponent
    ],
    exports: [
        HeaderComponent
    ]
})

export class HeaderModule {}
