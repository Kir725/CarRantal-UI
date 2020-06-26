import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthService) {
  }

  ngOnInit(): void {
  }

  // vehicles: VehicleModel[] = [];
  //
  // desiredVehicle : VehicleModel;
  // vehicleExist = false;
  //
  // constructor(private vehicleService: VehicleService) {
  // }
  //
  // ngOnInit(){
  //   this.vehicleService
  //     .getVehicles()
  //     .subscribe((vehicles:VehicleModel[]) =>{
  //     this.vehicles = vehicles;
  //   })
  // }
  //
  // findVehicle(id: number) {
  //   this.vehicleService.getVehicleById(+id)
  //     .subscribe((vehicle: VehicleModel) => {
  //       this.desiredVehicle = vehicle;
  //       this.vehicleExist = true;
  //     });
  // }
  //
  // deleteVehicle(vehicle:VehicleModel) {
  //   this.vehicleService.deleteVehicle(vehicle.id).subscribe();
  //
  // }

}
