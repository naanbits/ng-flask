import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatSnackBarModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
const modules = [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ...modules
    ], exports: [
        ...modules
    ]
})
export class MaterialModule {
}
