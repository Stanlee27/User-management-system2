
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { SubnavComponent } from './subnav.component';
import { OverviewComponent } from './overview.component';

const accountsModule = () => import('./accounts/accounts.module').then(x => x.AccountsModule);

const routes: Routes = [
    { path: '', component: LayoutComponent, 
      children: [
        { path: '', component: OverviewComponent },
        { path: 'accounts', loadChildren: accountsModule }
      ]
    },
    { path: 'subnav', component: SubnavComponent, outlet: 'subnav' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }