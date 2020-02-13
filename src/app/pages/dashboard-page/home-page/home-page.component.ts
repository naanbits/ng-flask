import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../services/product.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
    public sizeProducts = 0;
    constructor(private productService: ProductService) {
    }

    ngOnInit() {
        this.productService.productsList().subscribe((e: []) => {
            this.sizeProducts = e.length;
        });
    }

}
