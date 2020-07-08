import {CommonClientModel} from "./commonClient.model";

export class LegalClientModel extends CommonClientModel{

  public name: string;

  public type: string;

  public phone: number;

  public email: string;

  public agent: string;

  public organizationCode: string;

  constructor() {
    super();
  }
}
