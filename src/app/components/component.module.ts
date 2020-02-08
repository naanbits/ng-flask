import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommandBarComponent} from './shared/command-bar/command-bar.component';
import {MaterialModule} from '../material.module';

const components = [
    CommandBarComponent
];

@NgModule({
    declarations: [...components],
    imports: [
        CommonModule,
        MaterialModule,
    ],
    exports: [
        ...components
    ]
})
export class ComponentModule {
}
