import { Component } from '@angular/core';

import { AccountService } from './_services';
import { Account, Role } from './_models';

@Component({ 
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    account: Account;
    
    constructor(private accountService: AccountService) {
        this.accountService.account.subscribe(x => this.account = x);
    }

    get isAdmin() {
        return this.account && this.account.role === Role.Admin;
    }

    logout() {
        this.accountService.logout();
    }
}