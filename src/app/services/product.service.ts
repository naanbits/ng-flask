import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private _authService: AuthService, private _httpClient: HttpClient) {
    }

    public productsList() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');
<<<<<<< HEAD
        return this._httpClient.get( this.baseUrl+ '/products_list', {
=======
        console.log(environment.products.getAll);
        return this._httpClient.get(environment.products.getAll, {
            headers
        });
    }

    public getProduct(id: number) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');
        return this._httpClient.get(environment.products.get + id,{
            headers
        });
    }

    public deleteProduct(id: number) {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');
        return this._httpClient.get(environment.products.delete + id, {
            headers
        });
    }

    public productSave(product: { description, code, price }) {
        const {description, code, price} = product;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');

        return this._httpClient.post(environment.products.insert, {
            DESCRIPTION: description,
            PRICE: price,
            PRINCIPAL_CODE: code
        }, {
            headers
        });
    }

    public productEdit(id, product: { description, code, price }) {
        const {description, code, price} = product;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');

        return this._httpClient.post( environment.products.update + id, {
            DESCRIPTION: description,
            PRICE: price,
            PRINCIPAL_CODE: code
        }, {
>>>>>>> develop
            headers
        });
    }
}
