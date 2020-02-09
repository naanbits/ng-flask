import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit,OnDestroy {
    public hide = true;
    public form: FormGroup;
    private subscriptionAuth: Subscription;

    constructor(private _snac:MatSnackBar, private _authService: AuthService, private router:Router) {
        this.form = new FormGroup({
            username: new FormControl('',[Validators.required,Validators.pattern(/A-Z/)]),
            password: new FormControl('')
        });
    }

    ngOnInit() {
    }

    submit() {
        if (this.form.invalid) { 
            this._snac.open('Los campos deben de ser requerido')
            return; 
        }
        const {username, password} = this.form.getRawValue() as { username: string, password: string };
        this.subscriptionAuth = this._authService.login(username, password).subscribe((e: {access_token, user}) => {
           this._authService.setUser = e;
           this.router.navigate(['/']);
        },(e)=>{
            console.log(e)
        });

    }

    ngOnDestroy(): void {
        this.subscriptionAuth.unsubscribe();
    }
}
