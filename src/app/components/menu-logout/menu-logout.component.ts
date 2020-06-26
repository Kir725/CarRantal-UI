import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "../login/login.component";
import {RegistrationComponent} from "../registration/registration.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu-logout',
  templateUrl: './menu-logout.component.html',
  styleUrls: ['./menu-logout.component.css']
})
export class MenuLogoutComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openLogin() {
    const modalRef = this.modalService.open(LoginComponent,{ centered: true });
  }

  openReg() {
    const modalRef = this.modalService.open(RegistrationComponent,{ centered: true });
  }
}
