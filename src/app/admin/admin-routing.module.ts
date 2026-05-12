import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { OverviewComponent } from './overview.component';
import { AuthGuard } from '@app/_helpers';
import { Role } from '@app/_models';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: OverviewComponent },
            {
                path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(x => x.AccountsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule { }