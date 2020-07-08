import { Component, OnInit } from '@angular/core';
import {CommonClientModel} from "../../../shared/models/commonClient.model";
import {ClientService} from "../../../shared/services/client/client.service";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {ContractService} from "../../../shared/services/contract/contract.service";
import {ContractModel} from "../../../shared/models/contract.model";
import {VehicleService} from "../../../shared/services/vehicle/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  faAngleDown = faAngleDown;
  clients: CommonClientModel[];
  public isCollapsed: boolean[] = [];

  constructor(private clientService:ClientService,
              private contractService: ContractService,
              private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients:any)=>{
      this.clients = clients;
      this.clients.forEach(client =>{
        this.contractService.getContractsByClientId(client.id).subscribe((contracts:ContractModel[])=>{
          client.contracts = contracts;
          client.contracts.forEach(contract=>{
            this.vehicleService.getVehicleById(contract.vehicleId).subscribe((vehicle: Vehicle)=>{
              contract.vehicle = vehicle;
            })
          })
        },error => {
          client.contracts = null;
        })
      })
      console.log(this.clients);
      })
  }

}
