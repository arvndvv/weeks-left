import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerModule } from './components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatePickerModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule, MatNativeDateModule
  ],
  exports: [
    DatePickerModule,
    MatFormFieldModule, MatInputModule, MatDatepickerModule, ReactiveFormsModule
  ]
})
export class SharedModule { }
