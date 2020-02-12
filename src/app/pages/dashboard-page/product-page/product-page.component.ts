import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';
import {AuthService} from '../../../services/auth.service';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {isNull} from 'util';
import {Router} from '@angular/router';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
    displayedColumns: string[] = ['select', 'id', 'description', 'price', 'principalCode'];
    dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
    selection = new SelectionModel<any>(false, []);
    rowSelect = null;

    constructor(private _productService: ProductService, private _authService: AuthService, private _router: Router) {
        this._productService.productsList().subscribe((e: any) => {
            this.dataSource.data = e;
        }, error => {
            this._authService.logout();
        });
    }

    ngOnInit() {
    }

    filterTable(event) {
        console.log(event);
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
