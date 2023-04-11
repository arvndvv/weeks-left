import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weeks-left';
  dob = new FormControl()
  dobValue: Date | undefined;
  showLoader: boolean = false;
  constructor() { }
  ngOnInit(): void {
    this.dob.valueChanges.subscribe(val => this.dobValue = val)
  }
  onUpdate(event: boolean) {
    this.showLoader = event;
  }
}
