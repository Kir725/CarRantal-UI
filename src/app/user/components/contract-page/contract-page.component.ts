import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Vehicle} from "../../../shared/models/vehicle.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IndClientModel} from "../../../shared/models/indClient.model";
import {LegalClientModel} from "../../../shared/models/legalClient.model";
import {ClientService} from "../../../shared/services/client/client.service";
import {TotalRentCostCalcService} from "../../../shared/services/totalRentCostCalc.service";
import {NgbDateParserFormatter} from "@ng-bootstrap/ng-bootstrap";
import {ContractService} from "../../../shared/services/contract/contract.service";
import {ContractModel} from "../../../shared/models/contract.model";
import {User} from "../../../shared/models/user.model";
import {UserService} from "../../../shared/services/user.service";

@Component({
  selector: 'app-contract-page',
  templateUrl: './contract-page.component.html',
  styleUrls: ['./contract-page.component.css']
})
export class ContractPageComponent implements OnInit {

  pickupDate:string;
  dropOffDate:string;
  vehicle:Vehicle;
  form: FormGroup;
  indClient:IndClientModel;
  legalClient:LegalClientModel;
  currentUser: User;
  contract: ContractModel;
  totalRentCost: number;
  days: number;
  newUser: User;

  constructor(private route: ActivatedRoute,
              private clientService: ClientService,
              private contractService: ContractService,
              public totalRentCostCalcService:TotalRentCostCalcService,
              private parserFormatter: NgbDateParserFormatter,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.vehicle = new Vehicle();

    if(window.localStorage.getItem('user')){
      this.currentUser = JSON.parse(window.localStorage.getItem('user'));
      if(this.currentUser.clientId){
        this.clientService.getClientById(this.currentUser.clientId).subscribe((client:any)=>{
          if(client.type === 'физ') {
            this.indClient = client;
          }else{
            this.legalClient = client;
          }
        })
      }
    }

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
      this.vehicle.vehicleImage = params['image'];
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
          [Validators.required,Validators.pattern("[0-9]{8}")]),
      'agent': new FormControl(null,
          [Validators.required]),
      'createAkk': new FormControl(null),
      'password': new FormControl(null,[Validators.required, Validators.minLength(6)])}
      );
  }

  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get isCreate() { return this.form.get('createAkk'); }
  get password() { return this.form.get('password'); }

  addContract() {
    if(this.form.get('clientType').value==='ind'){
      this.setIndClient();
      this.clientService.createClient(this.indClient).subscribe((client:any)=>{
        this.indClient=client;
        console.log(this.indClient);
        if(!this.currentUser){
          if(this.isCreate.value){
            this.setUser();
            this.newUser.clientId = this.indClient.id;
            this.userService.createUser(this.newUser).subscribe((user:User)=>{
            })
          }
        }
        if(this.currentUser){
          if(!this.currentUser.clientId){
            this.currentUser.clientId = this.indClient.id;
            this.userService.setClientForUser(this.currentUser).subscribe((user:User)=>{
              window.localStorage.setItem('user',JSON.stringify(user));
            })
          }
        }
        this.setContract();
        this.contract.clientId = this.indClient.id;
        this.contractService.createContract(this.contract).subscribe((contract:ContractModel)=>{
          this.router.navigate(['/contractsuccess',{id: contract.id}])
        })
      })
    }else{
      this.setLegalClient();
      this.clientService.createClient(this.legalClient).subscribe((client:any)=>{
        this.legalClient = client;
        if(!this.currentUser){
          if(this.isCreate.value){
            this.setUser();
            this.newUser.clientId = this.legalClient.id;
            this.userService.createUser(this.newUser).subscribe((user:User)=>{
            })
          }
        }
        if(this.currentUser){
          if(!this.currentUser.clientId){
            this.currentUser.clientId = this.legalClient.id;
            this.userService.setClientForUser(this.currentUser).subscribe((user:User)=>{
              window.localStorage.setItem('user',JSON.stringify(user));
            })
          }
        }
        this.setContract();
        this.contract.clientId = this.legalClient.id;
        this.contractService.createContract(this.contract).subscribe((contract:ContractModel)=>{
          this.router.navigate(['/contractsuccess',{id: contract.id}])
        })
      })
    }
  }

  setIndClient(){
    this.indClient = new IndClientModel();
    this.indClient.email = this.form.get('email').value;
    this.indClient.phone = this.form.get('phone').value;
    this.indClient.name = this.form.get('name').value;
    this.indClient.secondName = this.form.get('secondName').value;
    this.indClient.middleName = this.form.get('middleName').value;
    this.indClient.type = 'ind';
    this.indClient.clientType = 'физ';
    this.indClient.passportId = this.form.get('passportId').value;
    this.indClient.passportSeries = this.form.get('passportSeries').value;
    this.indClient.birthDate = this.form.get('birthDate').value;
    this.indClient.drivingExperience = this.form.get('drivingExperience').value;
  }

  setLegalClient(){
    this.legalClient = new LegalClientModel();
    this.legalClient.name = this.form.get('organizationName').value;
    this.legalClient.email = this.form.get('email').value;
    this.legalClient.phone = this.form.get('phone').value;
    this.legalClient.agent = this.form.get('agent').value;
    this.legalClient.organizationCode = this.form.get('organizationCode').value;
    this.legalClient.type = "legal";
    this.legalClient.clientType = "юр";
  }

  setContract(){
    this.contract = new ContractModel();
    this.contract.vehicleId = this.vehicle.id;
    this.contract.rentalCost = this.totalRentCost;
    this.contract.startDate = new Date(this.pickupDate);
    this.contract.dropOffDate = new Date(this.dropOffDate);
  }

  addContractForUser() {
    this.setContract();
    this.contract.clientId = this.currentUser.clientId;
    this.contractService.createContract(this.contract).subscribe((contract:ContractModel)=>{
      this.router.navigate(['/contractsuccess',{id: contract.id}])
    })

  }

  setUser(){
    this.newUser = new User(
      this.form.get('email').value,
      this.form.get('password').value,
      'common'
    );
  }
}
