import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {clientUrls} from "../../../config/clientUrls";

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

  createClient(client: any){
    console.log(client);
    return this.http.post(clientUrls.post, {client});
  }

  updateVehicle(client: any){
    return this.http.put(clientUrls.put, {client});
  }
}
