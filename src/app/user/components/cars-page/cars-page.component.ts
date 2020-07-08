import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../../shared/services/vehicle/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {NgbDate, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CustomDatepickerI18n, I18n} from "../../datepicker-i18n/datepicker-i18n";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TotalRentCostCalcService} from "../../../shared/services/totalRentCostCalc.service";
import {Message} from "../../../shared/models/message.model";


@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  providers: [I18n, {provide: NgbDatepickerI18n, useClass: CustomDatepickerI18n}],
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  marks = new FormControl();
  marksList: string[] = ['Toyota', 'BMV', 'KIA', 'Porsche', 'Mercedes', 'Audi', 'NISSAN'];
  selectedMarks: string[] = [];

  message: Message;
  vehicles: Vehicle[] = [];
  pickupCalendar: NgbDateStruct;
  faCalendar = faCalendar;
  dropOffCalendar: NgbDateStruct;
  pickupDate: String;
  dropOffDate: String;
  canCalcTotal = false;
  form: FormGroup;

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private parserFormatter: NgbDateParserFormatter,
              public totalRentCostCalcService: TotalRentCostCalcService) {
  }

  ngOnInit() {
    this.message = new Message('','danger');

    this.form = new FormGroup({
      'pickup': new FormControl(null,[Validators.required]),
      'dropOff': new FormControl(null,[Validators.required])
    })

    this.route.paramMap.subscribe(params => {
      this.form.get('pickup').setValue(this.parserFormatter.parse(params.get('pickupDate')));
      this.form.get('dropOff').setValue(this.parserFormatter.parse(params.get('dropOffDate')));
      this.pickupCalendar = this.parserFormatter.parse(params.get('pickupDate'));
      this.dropOffCalendar = this.parserFormatter.parse(params.get('dropOffDate'));
    });

    if (this.pickupCalendar && this.dropOffCalendar) {
      this.searchCars();
    } else {
      this.vehicleService
        .getVehicles()
        .subscribe((vehicles: Vehicle[]) => {
          this.vehicles = vehicles;
        })
    }
  }


  searchCars() {
    if(!(this.pickupCalendar && this.dropOffCalendar)){
      this.pickupCalendar = this.form.get('pickup').value;
      this.dropOffCalendar = this.form.get('dropOff').value;
    }

    const days = this.totalRentCostCalcService.getDays(this.dropOffCalendar,this.pickupCalendar)
    if(days <= 0){
      this.showMessage('Дата начала не может быть позднее даты окончания аренды.','danger')
    }
    else{
      this.pickupDate = this.parserFormatter.format(this.pickupCalendar);
      this.dropOffDate = this.parserFormatter.format(this.dropOffCalendar);

      this.vehicleService.findNotInRent(this.pickupDate, this.dropOffDate)
        .toPromise().then((vehicles: Vehicle[]) => {
        this.vehicles = vehicles;
        if (this.marks.touched) {
          this.vehicles = this.vehicles.filter(this.filterMark, this);
        }
      })
      this.canCalcTotal = true;
    }
  }

  filterMark(vehicle: Vehicle) {
    return this.selectedMarks.includes(vehicle.make);
  }

  getSelectedMarks(event: {
    isUserInput: any;
    source: { value: any; selected: any };
  }) {
    if (event.isUserInput) {
      if (event.source.selected === true) {
        this.selectedMarks.push(event.source.value);
      } else {
        this.selectedMarks.splice(this.selectedMarks.indexOf(event.source.value), 1);
      }
    }
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000)
  }

}
