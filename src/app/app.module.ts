import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VehicleService} from "./shared/services/vehicle/vehicle.service";
import { HeaderComponent } from './user/components/header/header.component';
import { FooterComponent } from './user/components/footer/footer.component';
import { MainPageComponent } from './user/components/main-page/main-page.component';
import { CarsPageComponent } from './user/components/cars-page/cars-page.component';
import { ContractConditionPageComponent } from './user/components/contract-condition-page/contract-condition-page.component';
import { ContactPageComponent } from './user/components/contact-page/contact-page.component';
import { LoginComponent } from './user/components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './user/components/registration/registration.component';
import {SharedModule} from "./shared/shared.module";
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./shared/services/auth.service";
import { MenuLoginComponent } from './user/components/menu-login/menu-login.component';
import { MenuLogoutComponent } from './user/components/menu-logout/menu-logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbdDatepickerI18nModule} from "./user/datepicker-i18n/datepicker-i18n.module";
import { ContractPageComponent } from './user/components/contract-page/contract-page.component';
import {ClientService} from "./shared/services/client/client.service";
import {TotalRentCostCalcService} from "./shared/services/totalRentCostCalc.service";
import { ProfilePageComponent } from './user/components/profile-page/profile-page.component';
import {ContractService} from "./shared/services/contract/contract.service";
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        AdminModule,
        UserModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        BrowserAnimationsModule,
        NgbdDatepickerI18nModule,
        FontAwesomeModule,
    ],
  exports:[
    SharedModule
  ],
  providers: [VehicleService,UserService,AuthService,ClientService,TotalRentCostCalcService,ContractService],
  bootstrap: [AppComponent]
})
export class AppModule { }
