import { Component, OnInit } from '@angular/core';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {NgbDate, NgbDateParserFormatter, NgbDatepickerI18n} from "@ng-bootstrap/ng-bootstrap";
import {CustomDatepickerI18n, I18n} from "../../datepicker-i18n/datepicker-i18n";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  faCalendar = faCalendar;
  pickupCalendar: NgbDate;
  dropOffCalendar: NgbDate;
  pickupDate:String;
  dropOffDate:String;

  constructor(private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {

  }

  searchCars() {
  }

  pickupChange($event: any) {
    this.pickupDate = this.parserFormatter.format(this.pickupCalendar);
  }

  dropOffChange($event: any) {
    this.dropOffDate = this.parserFormatter.format(this.dropOffCalendar);
  }
}
