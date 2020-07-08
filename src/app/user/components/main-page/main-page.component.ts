import {Component, OnInit} from '@angular/core';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {NgbDate, NgbDateParserFormatter, NgbDatepickerI18n} from "@ng-bootstrap/ng-bootstrap";
import {CustomDatepickerI18n, I18n} from "../../datepicker-i18n/datepicker-i18n";
import {Message} from "../../../shared/models/message.model";
import {TotalRentCostCalcService} from "../../../shared/services/totalRentCostCalc.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public pickup: FormControl = new FormControl(null);

  faCalendar = faCalendar;
  pickupCalendar: NgbDate;
  dropOffCalendar: NgbDate;
  pickupDate: String;
  dropOffDate: String;
  message: Message;
  form: FormGroup

  constructor(private parserFormatter: NgbDateParserFormatter,
              private totalRentCostCalcService: TotalRentCostCalcService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.message = new Message('', 'danger',);
    this.form = new FormGroup({
      'pickup': new FormControl(null,[Validators.required]),
      'dropOff': new FormControl(null,[Validators.required])
    })
  }

  searchCars() {
   this.pickupCalendar = this.form.get('pickup').value;
   this.dropOffCalendar = this.form.get('dropOff').value;
   this.pickupDate = this.parserFormatter.format(this.pickupCalendar);
   this.dropOffDate = this.parserFormatter.format(this.dropOffCalendar);

    const days = this.totalRentCostCalcService.getDays(this.dropOffCalendar, this.pickupCalendar)
    if (days <= 0) {
      this.showMessage('Дата начала не может быть позднее даты окончания аренды.', "danger");
    } else {
      this.router.navigate(['/cars', {pickupDate: this.pickupDate, dropOffDate: this.dropOffDate}]);
    }
  }

  pickupChange($event: any) {
    this.pickupDate = this.parserFormatter.format(this.pickupCalendar);
  }

  dropOffChange($event: any) {
    this.dropOffDate = this.parserFormatter.format(this.dropOffCalendar);
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000)
  }
}
