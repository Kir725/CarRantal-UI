import { Component, OnInit } from '@angular/core';
import {faCalendar} from "@fortawesome/free-solid-svg-icons";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  faPhone = faPhone;
  faMapMarker = faMapMarker;
  faEnvelope = faEnvelope;
  faClock = faClock;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {

  }
}
