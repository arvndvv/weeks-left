import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }
