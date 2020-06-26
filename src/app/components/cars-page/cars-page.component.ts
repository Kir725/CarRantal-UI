import {Component, OnInit} from '@angular/core';
import {VehicleService} from "../../shared/services/vehicle/vehicle.service";
import {VehicleModel} from "../../shared/models/vehicle.model";
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {NgbDate, NgbDateParserFormatter, NgbDatepickerI18n, NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";
import {CustomDatepickerI18n, I18n} from "../../datepicker-i18n/datepicker-i18n";
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TotalRentCostCalcService} from "../../shared/services/totalRentCostCalc.service";


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

  vehicles: VehicleModel[] = [];
  pickupCalendar: NgbDateStruct;
  faCalendar = faCalendar;
  dropOffCalendar: NgbDateStruct;
  pickupDate: String;
  dropOffDate: String;

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private parserFormatter: NgbDateParserFormatter,
              public totalRentCostCalcService: TotalRentCostCalcService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.pickupCalendar = this.parserFormatter.parse(params.get('pickupDate'));
      this.dropOffCalendar = this.parserFormatter.parse(params.get('dropOffDate'));
    });

    if (this.pickupCalendar && this.dropOffCalendar) {
      this.searchCars();
    } else {
      this.vehicleService
        .getVehicles()
        .subscribe((vehicles: VehicleModel[]) => {
          this.vehicles = vehicles;
        })
    }
  }


  searchCars() {
    this.pickupDate = this.parserFormatter.format(this.pickupCalendar);
    this.dropOffDate = this.parserFormatter.format(this.dropOffCalendar);

    this.vehicleService.findNotInRent(this.pickupDate, this.dropOffDate)
      .toPromise().then((vehicles: VehicleModel[]) => {
      this.vehicles = vehicles;

      if (this.marks.touched) {
        console.log(this.vehicles);
        console.log(this.selectedMarks);
        this.vehicles = this.vehicles.filter(this.filterMark, this);
        console.log(this.vehicles);
      }
    })
  }

  filterMark(vehicle: VehicleModel) {
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

}
