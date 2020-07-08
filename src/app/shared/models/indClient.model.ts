import {CommonClientModel} from "./commonClient.model";

export class IndClientModel extends CommonClientModel{

  public email: string;

  public phone: number;

  public name: string;

  public type: string;

  public secondName: string;

  public middleName: string;

  public drivingExperience: number;

  public passportSeries: number;

  public passportId: number;

  public birthDate: Date;

  constructor() {
    super();
  }

}
