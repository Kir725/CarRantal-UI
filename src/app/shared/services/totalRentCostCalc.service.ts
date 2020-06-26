import {Injectable} from "@angular/core";
import {NgbDateStruct} from "@ng-bootstrap/ng-bootstrap";

@Injectable()
export class TotalRentCostCalcService {


  getTotalRentCost(costPerDay:number,dropOffDate:NgbDateStruct,pickupDate:NgbDateStruct){
    const days = Math.floor(
      (Date.UTC(dropOffDate.year, dropOffDate.month, dropOffDate.day) -
        Date.UTC(pickupDate.year,
          pickupDate.month, pickupDate.day)) / (1000 * 60 * 60 * 24));
    return costPerDay * days;
  }

  getDays(dropOffDate:NgbDateStruct,pickupDate:NgbDateStruct){
    return Math.floor(
      (Date.UTC(dropOffDate.year, dropOffDate.month, dropOffDate.day) -
        Date.UTC(pickupDate.year,
          pickupDate.month, pickupDate.day)) / (1000 * 60 * 60 * 24));
  }



}
