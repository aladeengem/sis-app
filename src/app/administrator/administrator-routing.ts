import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';

const router: Routes = [
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'sales', component: SalesComponent
    }
];

export const AdminRouter = RouterModule.forChild(router);