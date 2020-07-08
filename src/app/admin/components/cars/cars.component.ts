import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VehicleService} from "../../../shared/services/vehicle/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";
import {Message} from "../../../shared/models/message.model";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  message: Message;
  file: File;
  form: FormGroup;
  vehicles: Vehicle[];
  newVehicle: Vehicle;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.message = new Message('','danger');
    this.form = new FormGroup({
      'make': new FormControl(null, [Validators.required]),
      'model': new FormControl(null,
        [Validators.required]),
      'regPlate': new FormControl(null,
        [Validators.required,Validators.pattern("[a-zA-Z0-9]{8,9}")]),
      'issueYear': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{4}")]),
      'class': new FormControl(null,
        [Validators.required,Validators.pattern("[A-Z]{1,3}")]),
      'type': new FormControl(null,
        [Validators.required,Validators.pattern("[a-zA-Z]{1,}")]),
      'color': new FormControl(null,
        [Validators.required,Validators.pattern("[a-zA-Z]{1,}")]),
      'capacity': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{1,2}")]),
      'bail': new FormControl(null,[Validators.required,Validators.pattern("[0-9]{1,}")]),
      'rentalCostPerDay': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{1,}")]),
      'insuranceCost': new FormControl(null,
        [Validators.required,Validators.pattern("[0-9]{1,}")]),
      'carImageFile': new FormControl(null,[Validators.required])}
    );
    this.vehicleService.getVehicles().subscribe((vehicles: Vehicle[])=>{
      this.vehicles = vehicles;
    })

  }

  addCar() {
    const formData = new FormData();
    formData.append('carImage', this.file, this.file.name);

    this.newVehicle = new Vehicle();
    this.newVehicle.make = this.form.get('make').value;
    this.newVehicle.model = this.form.get('model').value;
    this.newVehicle.regPlate = this.form.get('regPlate').value;
    this.newVehicle.issueYear = this.form.get('issueYear').value;
    this.newVehicle.capacity = this.form.get('capacity').value;
    this.newVehicle.type = this.form.get('type').value;
    this.newVehicle.vehicleClass = this.form.get('class').value;
    this.newVehicle.rentalCostPerDay = this.form.get('rentalCostPerDay').value;
    this.newVehicle.insuranceCost = this.form.get('insuranceCost').value;
    this.newVehicle.bail = this.form.get('bail').value;
    this.newVehicle.color = this.form.get('color').value;
    this.newVehicle.vehicleImage = this.file.name;

    this.vehicleService.uploadCarImage(formData).subscribe(result=>{
      this.vehicleService.createVehicle(this.newVehicle).subscribe((vehicle:Vehicle)=>{
        this.vehicleService.getVehicles().subscribe((vehicles:Vehicle[])=>{
          this.vehicles = vehicles;
          this.showMessage('Машина добавлена','success');
        })
      })
      }
    );
  }

  onFileChanged(event) {
    this.file = event.target.files[0];
  }

  private showMessage( text:string, type:string = 'danger'){
    this.message = new Message(text,type);
    window.setTimeout(()=>{
      this.message.text = '';
    },5000)
  }

}

