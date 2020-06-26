import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {VehicleModel} from "../../shared/models/vehicle.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IndClientModel} from "../../shared/models/indClient.model";
import {LegalClientModel} from "../../shared/models/legalClient.model";
import {ClientService} from "../../shared/services/client/client.service";
import {TotalRentCostCalcService} from "../../shared/services/totalRentCostCalc.service";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  pickupDate:string;
  dropOffDate:string;
  vehicle:VehicleModel;
  form: FormGroup;
  indClient:IndClientModel;
  legalClient:LegalClientModel;
  totalRentCost: number;
  days: number;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              public totalRentCostCalcService:TotalRentCostCalcService,
              private parserFormatter: NgbDateParserFormatter) { }

  ngOnInit(): void {
    this.vehicle = new VehicleModel();

    this.route.paramMap.subscribe(params => {
      this.pickupDate = params.get('pickupDate');
      this.dropOffDate = params.get('dropOffDate');
    });

    this.route.queryParams.subscribe((params:Params)=>{
      this.vehicle.id = +params['id'];
      this.vehicle.make = params['make'];
      this.vehicle.model = params['model'];
      this.vehicle.bail = +params['bail'];
      this.vehicle.rentalCostPerDay = +params['rentalCostPerDay'];
    })

    this.totalRentCost = this.totalRentCostCalcService.getTotalRentCost
    (this.vehicle.rentalCostPerDay,
      this.parserFormatter.parse(this.dropOffDate),
      this.parserFormatter.parse(this.pickupDate));

    this.days = this.totalRentCostCalcService.getDays(this.parserFormatter.parse(this.dropOffDate),
      this.parserFormatter.parse(this.pickupDate));

    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null,
        [Validators.required, Validators.pattern("[0-9]{11}")]),
      'clientType': new FormControl('ind'),
      'name': new FormControl(null,
        [Validators.required,Validators.pattern("[а-яА-Яa-zA-Z]{2,30}")]),
      'secondName': new FormControl(null,
        [Validators.required,Validators.pattern("[а-яА-Яa-zA-Z]{2,30}")]),
      'middleName': new FormControl(null,
        [Validators.required,Validators.pattern("[а-яА-Яa-zA-Z]{2,30}")]),
      'passportId': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{4}")]),
      'passportSeries': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{6}")]),
      'birthDate': new FormControl(null,[Validators.required]),
      'drivingExperience': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{1,2}")]),
      'organizationName': new FormControl(null,
          [Validators.required,Validators.pattern("[а-яА-Яa-zA-Z]{5,90}")]),
      'organizationCode': new FormControl(null,
          [Validators.required,Validators.pattern("[0-9]{8,10}")]),
      'agent': new FormControl(null,
          [Validators.required])}
      );
  }

  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }

  addContract() {
    if(this.form['clientType']==='ind'){
      this.setIndClient();
      this.clientService.createClient(this.indClient).subscribe((client:any)=>{
        this.indClient=client;
        console.log(this.indClient);
      })
    }else{
      this.legalClient = new LegalClientModel();
      this.setLegalClient();
      console.log(this.legalClient);
      this.clientService.createClient(this.legalClient).subscribe((client:any)=>{
        this.legalClient = client;
        console.log(this.legalClient);
      })
    }

  }

  setIndClient(){
    this.indClient.email = this.form['email'];
    this.indClient.phone = this.form['phone'];
    this.indClient.name = this.form['name'];
    this.indClient.secondName = this.form['secondName'];
    this.indClient.middleName = this.form['middleName'];
    this.indClient.type = 'физ';
    this.indClient.clientType = 'физ';
    this.indClient.passportId = this.form['passportId'];
    this.indClient.passportSeries = this.form['passportSeries'];
    this.indClient.birthDate = this.form['birthDate'];
    this.indClient.drivingExperience = this.form['drivingExperience'];
  }

  setLegalClient(){
    this.legalClient.name = this.form.get('organizationName').value;
    this.legalClient.email = this.form.get('email').value;
    this.legalClient.phone = this.form.get('phone').value;
    this.legalClient.agent = this.form.get('agent').value;
    this.legalClient.organizationCode = this.form.get('organizationCode').value;
    this.legalClient.type = "юр";
    this.legalClient.clientType = "юр";
  }
}
