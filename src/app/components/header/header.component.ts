import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../login/login.component";
import {RegistrationComponent} from "../registration/registration.component";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService:AuthService) {}

  ngOnInit(): void {
  }


}
