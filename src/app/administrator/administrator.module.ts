import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministratorComponent } from './administrator.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouter } from './administrator-routing';
import { CreateSalesComponent } from './create-sales/create-sales.component';
import { MapsComponent } from './maps/maps.component';

@NgModule({
  declarations: [AdministratorComponent, SideMenuComponent, DashboardComponent, CreateSalesComponent, MapsComponent],
  imports: [
    CommonModule,
    AdminRouter
  ],
  exports: [AdministratorComponent]
})
export class AdministratorModule { }
