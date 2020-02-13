import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-product-page',
    templateUrl: './add-product-page.component.html',
    styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {
    constructor(private productService: ProductService,
                private matSnackBar: MatSnackBar,
                private router: Router) {
    }

    ngOnInit() {
    }

    save(form) {
        if (form.valid) {
            console.log(form);
            this.productService.productSave(form.getRawValue()).subscribe(e => {
                this.matSnackBar.open('Producto Insertado Correctamente', null,{
                    duration: 2000,
                    panelClass: 'success'
                });
                this.router.navigate(['/']);
            });
        }
    }
}
