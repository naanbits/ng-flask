import {Component, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {
    cols = 2;
    @Output() producto;
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
    save() {
        if (this.form.valid) {
            this.productService.productSave(this.form.getRawValue()).subscribe(e => {
                console.log(e);
            });
        }
    }

  ngOnInit() {
  }

}
