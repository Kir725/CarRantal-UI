import { Component, OnInit } from '@angular/core';
import {User} from "../../shared/models/user.model";
import {LegalClientModel} from "../../shared/models/legalClient.model";
import {IndClientModel} from "../../shared/models/indClient.model";
import {ClientService} from "../../shared/services/client/client.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  legalClient: LegalClientModel;
  indClient: IndClientModel;

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.user = JSON.parse(window.localStorage.getItem('user'))
    if(this.user.clientId){
      this.clientService.getClientById(this.user.clientId).subscribe((client:any)=>{
        console.log(client);
        if(client.type === 'физ'){
          this.indClient = client;
          console.log(this.indClient)
        }else{
          this.legalClient = client;
        }
      })
    }
  }

}
