import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  private directionSubject = new Subject<boolean>();
  
  // Observable to emit direction changes
  direction$: Observable<boolean> = this.directionSubject.asObservable();

  constructor() { }

  // Method to emit direction change
  emitDirection(isLTR: boolean): void {
    this.directionSubject.next(isLTR);
  }
}
