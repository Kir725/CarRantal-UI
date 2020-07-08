import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";




@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    FontAwesomeModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]

})
export class SharedModule { }
