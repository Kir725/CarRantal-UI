import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {clientUrls} from "../../../config/clientUrls";
import {CommonClientModel} from "../../models/commonClient.model";

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {
  }

  getClients(){
    return this.http.get(clientUrls.getAll + '2')
  }

  getClientById(id: number){
    return this.http.get(clientUrls.get + id.toString() );
  }

  deleteClient(id: number){
    return this.http.delete(clientUrls.delete + id.toString());
  }

  createClient(client: CommonClientModel){
    console.log(client);
    return this.http.post(clientUrls.post, client);
  }

  updateClient(client: CommonClientModel){
    return this.http.put(clientUrls.put, client);
  }
}
