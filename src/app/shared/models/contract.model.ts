import {Vehicle} from "./vehicle.model";

export class ContractModel {

  public id?: number;

  public startDate: Date;

  public dropOffDate: Date;

  public rentalCost: number;

  public vehicleId: number;

  public clientId: number;

  public vehicle: Vehicle;

  constructor() {
  }

}
