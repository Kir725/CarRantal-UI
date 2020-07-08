import {NgModule} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {CarsPageComponent} from "./components/cars-page/cars-page.component";
import {ContractConditionPageComponent} from "./components/contract-condition-page/contract-condition-page.component";
import {ContactPageComponent} from "./components/contact-page/contact-page.component";
import {LoginComponent} from "./components/login/login.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {MenuLoginComponent} from "./components/menu-login/menu-login.component";
import {MenuLogoutComponent} from "./components/menu-logout/menu-logout.component";
import {ContractPageComponent} from "./components/contract-page/contract-page.component";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {CommonModule} from "@angular/common";
import {UserRoutingModule} from "./user-routing.module";
import { UserMainPageComponent } from './user-main-page/user-main-page.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbdDatepickerI18nModule} from "./datepicker-i18n/datepicker-i18n.module";
import { ContractSuccessComponent } from './components/contract-success/contract-success.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    CarsPageComponent,
    ContractConditionPageComponent,
    ContactPageComponent,
    LoginComponent,
    RegistrationComponent,
    MenuLoginComponent,
    MenuLogoutComponent,
    ContractPageComponent,
    ProfilePageComponent,
    UserMainPageComponent,
    ContractSuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgbModule,
    SharedModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgbdDatepickerI18nModule
  ]
})
export class UserModule {

}
