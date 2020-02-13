import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-edit-product',
    templateUrl: './edit-product-page.component.html',
    styleUrls: ['./edit-product-page.component.scss']
})
export class EditProductPageComponent implements OnInit {
    public productEdit;
    public idProduct;
    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.idProduct = this.activatedRoute.snapshot.params.id;
        this.productService.getProduct(this.idProduct).subscribe(e => {
            this.productEdit = e[0];
        }, error => {
            this.router.navigate(['/product']);
        });
    }

    edit(form) {
        if (form.valid) {
            console.log(form);
            this.productService.productEdit(this.idProduct, form.getRawValue()).subscribe(e => {
                console.log(e);
            });
        }
    }


}
