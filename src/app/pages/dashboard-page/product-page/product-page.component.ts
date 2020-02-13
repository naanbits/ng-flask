import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {AuthService} from '../../../services/auth.service';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {isNull} from 'util';
import {Router} from '@angular/router';
import {OptionSelectModalComponent} from '../../../components/option-select-modal/option-select-modal.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
    displayedColumns: string[] = ['select', 'id', 'description', 'price', 'principalCode'];
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    selection = new SelectionModel<any>(false, []);
    rowSelect = null;

    constructor(private _productService: ProductService,
                private _authService: AuthService,
                private _router: Router,
                private matDialog: MatDialog,
                private _snackBar: MatSnackBar) {
        this._productService.productsList().subscribe((e: any) => {
            this.dataSource.data = e;
        }, error => {
            this._authService.logout();
        });
    }

    filterTable(event) {
        console.log(event);
    }

    openDialog() {
        const dialogRef = this.matDialog.open(OptionSelectModalComponent, {
            width: '250px',
        });
        dialogRef.afterClosed().subscribe(e => {
            if (e && !isNull(this.rowSelect)) {
                this._productService.deleteProduct(this.rowSelect.ID).subscribe(a => {
                    this._snackBar.open('Producto eliminado Correctamente');
                }, error => {
                    this._snackBar.open('No se pudo eliminar Producto');
                });
            }
        });
    }

    itemSelect(row, event) {
        // tslint:disable-next-line:no-unused-expression
        (event) ? this.selection.toggle(row) : null;
        this.rowSelect = row;
    }

    editProduct() {
        if (isNull(this.rowSelect)) {
            return;
        }
        this._router.navigate(['/edit-product', this.rowSelect.ID
        ]);
    }

}
