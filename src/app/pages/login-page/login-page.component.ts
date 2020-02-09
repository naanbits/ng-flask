import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
    private hide = true;
    private form: FormGroup;
    private subscriptionAuth: Subscription;

    constructor(private _authService: AuthService, private router: Router, private _snackBar: MatSnackBar) {
        this.form = new FormGroup({
            username: new FormControl(''),
            password: new FormControl('')
        });
    }

    ngOnInit() {
    }

    submit() {
        if (this.form.invalid) { return; }
        const {username, password} = this.form.getRawValue() as { username: string, password: string };
        this.subscriptionAuth = this._authService.login(username, password).subscribe((e: {access_token, user}) => {
           this._authService.setUser = e;
           this.router.navigate(['/']);
        }, e => {
           if (e.status === 500) {
               this._snackBar.open('Usuario o contraseña no valida', null, {
                   duration: 2000,
                   panelClass: 'danger'
               });
           }
        });
    }

    ngOnDestroy(): void {
        this.subscriptionAuth.unsubscribe();
    }
}
