import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
<<<<<<< HEAD

    constructor(public _authService: AuthService) {
=======
    menu = 'side';
    opened = true;
    constructor(public _authService: AuthService, private _router: Router, public breakpointObserver: BreakpointObserver) {
        breakpointObserver.observe([
            Breakpoints.Small,
            Breakpoints.XSmall,
        ]).subscribe(result => {
            if (result.matches) {
                this.menu = 'over';
                this.opened = false;
            } else {
                this.menu = 'side';
                this.opened = true;
            }
        });
>>>>>>> develop
    }

    ngOnInit() {
    }

    public logout() {
        if (this._authService.logout()) {
            this._router.navigate(['/login']);
        }
    }
}
