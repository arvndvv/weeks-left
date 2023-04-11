import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DatePickerComponent), multi: true }
  ]
})
export class DatePickerComponent implements ControlValueAccessor {
  dob: FormControl = new FormControl();
  constructor() { }
  writeValue(obj: any): void {
    if (obj) {
      this.dob.setValue(obj);
    }

  }
  registerOnChange(fn: any): void {
    this.dob.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void { }

}
