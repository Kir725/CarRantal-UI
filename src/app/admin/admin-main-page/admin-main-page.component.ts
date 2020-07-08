import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
    this.router.navigate(['/admin','cars'])
  }

  logout() {
    this.authService.logout();
  }
}
