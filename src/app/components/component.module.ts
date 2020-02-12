import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandBarComponent} from './shared/command-bar/command-bar.component';
import {MaterialModule} from '../material.module';
import { FormProductComponent } from './form-product/form-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxBarcode6Module} from 'ngx-barcode6';

const components = [
    CommandBarComponent,
    FormProductComponent
];

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgxBarcode6Module,
        MaterialModule,
    ],
    exports: [
        ...components
    ]
})
export class ComponentModule {
}
