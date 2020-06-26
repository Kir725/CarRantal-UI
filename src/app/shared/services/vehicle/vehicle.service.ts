import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {vehicleUrls} from "../../../config/vehicleUrls";
import {VehicleModel} from "../../models/vehicle.model";

@Injectable()
export class VehicleService {
  constructor(private http:HttpClient) {
  }


  getVehicles(){
    return this.http.get(vehicleUrls.getAll + '1')
  }

  getVehicleById(id: number){
        return this.http.get(vehicleUrls.get + id.toString() );
  }

  deleteVehicle(id: number){
    return this.http.delete(vehicleUrls.delete + id.toString());
  }

  createVehicle(vehicle: VehicleModel){
    return this.http.post(vehicleUrls.post, {vehicle});
  }

  updateVehicle(vehicle: VehicleModel){
    return this.http.put(vehicleUrls.put, {vehicle});
  }

  findNotInRent(pickUpDate:String, dropOffDate:String){
    return this.http.get(vehicleUrls.findNotInRent + pickUpDate +'/' + dropOffDate);
  }
}
