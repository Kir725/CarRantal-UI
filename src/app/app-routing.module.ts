import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from "./components/main-page/main-page.component";
import {CarsPageComponent} from "./components/cars-page/cars-page.component";
import {ContractConditionPageComponent} from "./components/contract-condition-page/contract-condition-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {ContractPageComponent} from "./components/contract-page/contract-page.component";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'cars', component: CarsPageComponent},
  {path: 'cars/:pickupDate/:dropOffDate', component: CarsPageComponent},
  {path: 'condition', component: ContractConditionPageComponent},
  {path: 'contacts', component: ContactPageComponent},
  {path: 'contract/:carId/:pickupDate/:dropOffDate', component: ContractPageComponent},
  {path: 'profile', component: ProfilePageComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
