import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { IWeek, UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  units: IWeek[][] = [];
  private _dob: Date | undefined;
  today = new Date();
  completedWeeks: BehaviorSubject<number> = new BehaviorSubject(0);
  @Output() isUpdating: EventEmitter<boolean> = new EventEmitter(false);
  @Input() get dob(): Date | undefined {
    return this._dob;
  };
  set dob(value: Date | undefined) {
    this._dob = value;
    if (value) {
      const weeksCompletedCount = Math.floor(
        (this.today.getTime() - value.getTime()) / (1000 * 60 * 60 * 24 * 7)
      );
      this.completedWeeks.next(weeksCompletedCount);
    }
  }

  constructor(private _utils: UtilsService) { }
  ngOnInit(): void {
    this.today.setHours(0, 0, 0, 0);
    this.completedWeeks.pipe(
      tap(() => this.isUpdating.emit(true)),
      tap(() => this.units = []),
      tap((weeks) => this.units = this._utils.getWeeks(weeks)),
      tap(() => this.isUpdating.emit(false))
    ).subscribe()
  }
}
