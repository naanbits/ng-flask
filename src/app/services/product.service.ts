import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = environment.urlBase;

    constructor(private _authService: AuthService, private _httpClient: HttpClient) {
    }

    public productsList() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');
        return this._httpClient.get('/products_list', {
            headers
        });
    }
    public productSave(product: {description, code, price}) {
        const {description, code, price} = product;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');

        return this._httpClient.post('/insert_product', {
            DESCRIPTION: description,
            PRICE: price,
            PRINCIPAL_CODE: code
        }, {
            headers
        });
    }
}
