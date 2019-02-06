import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateSalesComponent } from './create-sales/create-sales.component';
import { MapsComponent } from './maps/maps.component';

const router: Routes = [
    {
        path: 'dashboard', component: DashboardComponent
    },
    {
        path: 'sales', component: CreateSalesComponent
    },
    {
        path: 'maps', component: MapsComponent
    }
];

export const AdminRouter = RouterModule.forChild(router);