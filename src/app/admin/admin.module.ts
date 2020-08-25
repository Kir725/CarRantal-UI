import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { AdminMainPageComponent } from './admin-main-page/admin-main-page.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CarsComponent } from './components/cars/cars.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
  AdminMainPageComponent,
  ClientsComponent,
  CarsComponent,
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        NgbCollapseModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AdminModule {

}
