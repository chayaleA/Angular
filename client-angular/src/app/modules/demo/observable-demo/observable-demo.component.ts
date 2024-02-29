import { Component, OnInit } from '@angular/core';
import { Observable, interval,from } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { StudentService } from '../../students/services/student.service';
import { Student } from '../../students/models/student.model';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html'
})
export class ObservableDemoComponent implements OnInit {

  students: Student[];

  studentsName: Observable<string>;

  studentsName2: Observable<string>;
  //data stream
  source: Observable<number> = new Observable((observer) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    setTimeout(() => {
      observer.next(4);
    }, 3000)

    //when the stream is "סופי"
    //observer.complete();

    //observer.error("Error!!")
  })

  timer1: Observable<string> = new Observable((observe) => {
    setInterval(() => {
      observe.next(new Date().toLocaleTimeString());
    }, 1000)
  })

  timer: Observable<string> = interval(1000).pipe(map(() => { return new Date().toLocaleTimeString() }))
  x: number;
  time: string;

  constructor(private _studentService: StudentService) {

    this.source.pipe(map(x => x * 3), filter(x => x % 2 == 0)).subscribe((val) => {
      this.x = val;
      console.log(this.x);
    }
      ,
      (error) => {
        console.log(error)
      },
      () => {
        this.x = 0;
        console.log("complete");
      }
    );

    this.timer.subscribe((time) => {
      this.time = time;
    })
  }

  ngOnInit(): void {
    this._studentService.getStudentsFromHttp().subscribe((res) => {
      this.students = res;
  
      this.studentsName = new Observable((observer) => {
        for (var i = 0; i < this.students.length; i++) {
          observer.next(this.students[i].firstName + " " + this.students[i].lastname);
        }
        observer.complete();
      })

      this.studentsName2 = from(this.students).pipe(map((student)=>{return student.firstName + " " + student.lastname }))
  
      this.studentsName2.subscribe((name) => {
        console.log(name);
      }, () => { }, () => { console.log("Complete!") });
    });
  }
  
}
