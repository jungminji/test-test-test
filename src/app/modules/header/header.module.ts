import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './containers/header.component';
import { HeaderBrandComponent } from './components/brand/brand.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        HeaderComponent,
        HeaderBrandComponent
    ],
    exports: [
        HeaderComponent
    ]
})

export class HeaderModule {}
