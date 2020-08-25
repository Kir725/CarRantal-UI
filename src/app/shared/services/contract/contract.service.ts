import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {contractUrls} from "../../../config/contractUrls";
import {ContractModel} from "../../models/contract.model";

@Injectable()
export class ContractService {
  constructor(private http: HttpClient) {
  }

  getContracts(){
    return this.http.get(contractUrls.getAll + '3')
  }

  getContractById(id: number){
    return this.http.get(contractUrls.get + id.toString() );
  }

  deleteContract(id: number){
    return this.http.delete(contractUrls.delete + id.toString());
  }

  createContract(contract: ContractModel){
    return this.http.post(contractUrls.post, contract);
  }

  updateContract(contract: ContractModel){
    return this.http.put(contractUrls.put, contract);
  }

  getContractsByClientId(clientId: number){
    return this.http.get(contractUrls.getContractsByClient + clientId.toString());
  }
}
