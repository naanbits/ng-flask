import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'app-add-product-page',
    templateUrl: './add-product-page.component.html',
    styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {
    constructor(private productService: ProductService) {
    }

    ngOnInit() {
    }

    save(form) {
        if (form.valid) {
            console.log(form);
            this.productService.productSave(form.getRawValue()).subscribe(e => {
                console.log(e);
            });
        }
    }
}
