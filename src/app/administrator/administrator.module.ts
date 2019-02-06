import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { AdminRouter } from './administrator-routing';

@NgModule({
  declarations: [AdministratorComponent, SideMenuComponent, DashboardComponent, SalesComponent],
  imports: [
    CommonModule,
    AdminRouter
  ],
  exports: [AdministratorComponent]
})
export class AdministratorModule { }
