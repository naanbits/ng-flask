import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private baseUrl = 'https://gentle-refuge-26139.herokuapp.com';

    constructor(private _authService: AuthService, private _httpClient: HttpClient) {
    }

    public productsList() {
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this._authService.token)
            .set('accept', 'application/json')
            .set('content-type', 'application/json');
        return this._httpClient.get( this.baseUrl+ '/products_list', {
            headers
        });
    };
}
