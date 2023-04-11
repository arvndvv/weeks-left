import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
export interface IWeek {
  isCompleted: boolean;
  isCurrent: boolean;
}
@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() { }

  getWeeks(weeksCompletedCount: number): IWeek[][] {
    return Array(90).fill(false).map(() => {
      return Array(52).fill(false).map(() => {
        const isCompleted =
          weeksCompletedCount >= 0 ? !!weeksCompletedCount-- : false;
        const isCurrent = weeksCompletedCount === -1;
        if (isCurrent) weeksCompletedCount--;
        return { isCompleted, isCurrent };
      });
    });

  }
}
