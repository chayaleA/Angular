import { Component, Input } from '@angular/core';
import { Test } from '../../models/test.model';
import { AvgTests } from '../../services/avgTests.service';

@Component({
  selector: 'app-test-history',
  templateUrl: './test-history.component.html'
})
export class TestHistoryComponent {
  @Input()
  testsArr: Test[] | undefined;

  private _idStudent: number = 0;

  public get id():number{
    return this._idStudent;
  }

  @Input()
  public set id(id:number){
    this._idStudent = id;
    this._avg.getAvg(this._idStudent).then((avg) => this.average = avg)
  }

  average: number = 0;

  constructor(private _avg: AvgTests) {
  }
}
