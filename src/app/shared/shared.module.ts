import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ]

})
export class SharedModule { }
