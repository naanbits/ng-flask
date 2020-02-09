import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isNull} from 'util';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private baseUrl = 'https://gentle-refuge-26139.herokuapp.com';
    private user: {User, access_token};
    public logged: boolean;
    constructor(private http: HttpClient) {
        if (localStorage.getItem('user')) {
            this.setUser = JSON.parse(localStorage.getItem('user'));
        }
    }

    login(username: string, password: string) {
        return this.http.post(this.baseUrl + '/crear_token', {
            username,
            password
        });
    }
    public set setUser(user) {
        if (!isNull(user)) {
            localStorage.setItem('user', JSON.stringify(user));
            this.user = user;
            this.logged = true;
        }
    }
    public get userLogged() {
        return `${this.user.User.first_name}` ;
    }
    public get token() {
        return this.user.access_token;
    }
    public renewToken() {
        this.login(this.user.User.username, 'admin').subscribe(e=>{
            this.setUser = e;
        });
    }
    public logout() {
        if (this.logged) {
            localStorage.removeItem('user');
            this.logged = false;
            this.user = null;
            return true;
        }
        return false;
    }
}
