import {ContractModel} from "./contract.model";

export class CommonClientModel {
  public id?: number;

  public clientType: string;

  public contracts: ContractModel[];

  public contractsId: number[];

  constructor() {
  }

}
