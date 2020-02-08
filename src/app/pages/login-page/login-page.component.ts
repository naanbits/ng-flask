import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit,OnDestroy {
    private hide = true;
    private form: FormGroup;
    private subscriptionAuth: Subscription;

    constructor(private _authService: AuthService, private router:Router) {
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
        });
    }

    ngOnDestroy(): void {
        this.subscriptionAuth.unsubscribe();
    }
}
