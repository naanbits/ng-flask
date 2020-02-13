import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ProductService} from '../../services/product.service';
import {isNull} from 'util';
import {isEmpty} from 'rxjs/operators';

@Component({
    selector: 'app-form-product',
    templateUrl: './form-product.component.html',
    styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit, OnChanges {
    cols = 2;
    @Input() product = null;
    @Output() save = new EventEmitter();
    form: FormGroup;

    constructor(breakpointObserver: BreakpointObserver, private productService: ProductService) {
        breakpointObserver.observe([
            Breakpoints.Small,
            Breakpoints.XSmall,
        ]).subscribe(result => {
            if (result.matches) {
                this.cols = 1;
            } else {
                this.cols = 2;
            }
        });
        this.form = new FormGroup({
            description: new FormControl('', [Validators.required]),
            price: new FormControl('', [Validators.required]),
            code: new FormControl('', [Validators.required])
        });

    }

    setProductForm() {
        if (!isNull(this.product) && this.product !== undefined) {
            this.form.setValue({
                description: this.product.DESCRIPTION,
                price: this.product.PRICE,
                code: this.product.PRINCIPAL_CODE
            });
        }
    }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.setProductForm();
    }
}
