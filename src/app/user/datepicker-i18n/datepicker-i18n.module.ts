import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbdDatepickerI18n} from "./datepicker-i18n";
import {NgbDatepickerModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";



@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [NgbdDatepickerI18n],
  exports: [NgbdDatepickerI18n],
  bootstrap: [NgbdDatepickerI18n]
})
export class NgbdDatepickerI18nModule { }
