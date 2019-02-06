import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSalesComponent } from './create-sales/create-sales.component';

const router: Routes = [
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'sales', component: CreateSalesComponent
    }
];

export const AdminRouter = RouterModule.forChild(router);