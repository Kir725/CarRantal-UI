import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VehicleService} from "./shared/services/vehicle/vehicle.service";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { ContractConditionPageComponent } from './components/contract-condition-page/contract-condition-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationComponent } from './components/registration/registration.component';
import {SharedModule} from "./shared/shared.module";
import {UserService} from "./shared/services/user.service";
import {AuthService} from "./shared/services/auth.service";
import { MenuLoginComponent } from './components/menu-login/menu-login.component';
import { MenuLogoutComponent } from './components/menu-logout/menu-logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbdDatepickerI18nModule} from "./datepicker-i18n/datepicker-i18n.module";
import { ContractPageComponent } from './components/contract-page/contract-page.component';
import {ClientService} from "./shared/services/client/client.service";
import {TotalRentCostCalcService} from "./shared/services/totalRentCostCalc.service";
import { ProfilePageComponent } from './components/profile-page/profile-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    CarsPageComponent,
    ContractConditionPageComponent,
    ContactPageComponent,
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    MenuLoginComponent,
    MenuLogoutComponent,
    ContractPageComponent,
    ProfilePageComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgbModule,
        SharedModule,
        BrowserAnimationsModule,
        FontAwesomeModule,
      NgbdDatepickerI18nModule
    ],
  providers: [VehicleService,UserService,AuthService,ClientService,TotalRentCostCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
