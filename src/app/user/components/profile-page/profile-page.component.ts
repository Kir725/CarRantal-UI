import {Component, OnInit} from '@angular/core';
import {User} from "../../../shared/models/user.model";
import {LegalClientModel} from "../../../shared/models/legalClient.model";
import {IndClientModel} from "../../../shared/models/indClient.model";
import {ClientService} from "../../../shared/services/client/client.service";
import {ContractModel} from "../../../shared/models/contract.model";
import {ContractService} from "../../../shared/services/contract/contract.service";
import {VehicleService} from "../../../shared/services/vehicle/vehicle.service";
import {Vehicle} from "../../../shared/models/vehicle.model";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  legalClient: LegalClientModel;
  indClient: IndClientModel;
  contracts: ContractModel[];

  constructor(private clientService: ClientService,
              private contractService: ContractService,
              private vehicleService: VehicleService) {
  }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    if (this.user.clientId) {
      this.clientService.getClientById(this.user.clientId).subscribe((client: any) => {
        this.contractService.getContractsByClientId(client.id).subscribe((contracts: ContractModel[]) => {
          this.contracts = contracts;
          this.contracts.forEach(contract=>{
            this.vehicleService.getVehicleById(contract.vehicleId).subscribe((vehicle:Vehicle)=>{
              contract.vehicle = vehicle;
            })
          })
        })
        if (client.clientType === 'физ') {
          this.indClient = new IndClientModel();
          this.indClient = client;
        } else {
          this.legalClient = new LegalClientModel();
          this.legalClient = client;
        }
      })
    }
  }

}
