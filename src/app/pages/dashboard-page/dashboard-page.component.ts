import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

    constructor(private _authService: AuthService,private _router:Router) {
    }

    ngOnInit() {
    }
    public logout() {
        if (this._authService.logout()) {
            this._router.navigate(['/login']);
        }
    }
}
