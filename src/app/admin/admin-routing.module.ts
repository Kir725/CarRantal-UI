import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarsComponent} from "./components/cars/cars.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {AdminMainPageComponent} from "./admin-main-page/admin-main-page.component";



const routes: Routes = [
  {path: 'admin', component: AdminMainPageComponent, children: [
      {path: 'clients', component: ClientsComponent},
      {path: 'cars', component: CarsComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
