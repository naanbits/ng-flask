import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandBarComponent} from './shared/command-bar/command-bar.component';
import {MaterialModule} from '../material.module';
import { FormProductComponent } from './form-product/form-product.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgxBarcode6Module} from 'ngx-barcode6';
import { OptionSelectModalComponent } from './option-select-modal/option-select-modal.component';

const components = [
    CommandBarComponent,
    FormProductComponent,
    OptionSelectModalComponent
];

@NgModule({
    declarations: [...components, ],
    entryComponents: [
      OptionSelectModalComponent
    ],
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
