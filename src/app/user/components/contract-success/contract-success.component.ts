import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contract-success',
  templateUrl: './contract-success.component.html',
  styleUrls: ['./contract-success.component.css']
})
export class ContractSuccessComponent implements OnInit {

  contractId: number;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.contractId = +params.get('id');
    });
  }

}
