import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../../models/student.model';
import { DatePipe } from '@angular/common';
import { StudentService } from '../../services/student.service';
import { SumAbsenceDays } from '../../services/sumAbsenceDays.model';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
})
export class ListStudentsComponent implements OnInit {

  students: Student[];

  filteredStudents: Student[] = [];

  private searchSubject = new Subject<string>();

  searchStudents$: Observable<Student[]>;

  searchText: string = "";

  searchStudents(term: string): Observable<Student[]> {
    return new Observable((observer) => {
      if (term.trim() === "") {
        observer.next(this.students);
      } else {
        const filteredStudents = this.students.filter(student =>
          student.firstName.toLowerCase().includes(term.toLowerCase())
        );
        observer.next(filteredStudents);
      }
    });
  }

  onSearchInputChange(): void {
    this.searchSubject.next(this.searchText);
  }

  deleteStudent(id: number) {
    let i;
    for (i = 0; i < this.students.length; i++)
      if (this.students[i].id == id)
        break;

    this._studentService.deleteStudentFromService(id).subscribe(() => {
      this.students.splice(i, 1);
    }, err => {
      alert("error!")
    })
  }

  days: number = 0;

  selectStudent: Student = new Student;

  showDetails(studentToShow: Student) {
    this.selectStudent = studentToShow;
    this._router.navigate(["/students_details", studentToShow.id])
  }

  ShowNewStudent() {
    this.selectStudent = new Student();
    this._router.navigate(["/students_details", 1])
    //כדי שיכנס לי לבדיקה אם מאותחל התלמיד
    this.selectStudent.id = 1;
  } studentToAdd

  i: number = 0;
  existStudent: Boolean = false;

  AddNewStudentToList(studentToAdd: Student) {
    console.log(studentToAdd);

    //this._sumDays.getSumAbsenceDays(.id).then((sum)=>{this.days = sum})

    this.existStudent = false;
    for (this.i = 0; this.i < this.students.length; this.i++) {
      if (this.students[this.i].id == studentToAdd.id) {
        this.existStudent = true;
        this._studentService.updateStudentToService(studentToAdd, studentToAdd.id).subscribe(() => {
          // this.students[this.i] = studentToAdd;
          this._studentService.getStudentsFromHttp().subscribe(res => {
            this.students = res;
            this.filteredStudents = res;
          });
        }, err => {
          alert("error!")
        })
        break;
      }
    }
    if (this.existStudent == false) {
      this._studentService.addStudentToService(studentToAdd).subscribe((res) => {
        this.students.push(studentToAdd);
      }, err => {
        alert(err)
      });
    }
    this.selectStudent = new Student;
    this.i = 0;
  }

  showDescription() {
    alert("It is your first time doing this, Do you need help?");
  }

  showActiveStudents(active: boolean) {
    this._studentService.getActiveStudents(active).subscribe(res => {
      this.students = res;
      if (this.searchText.trim() !== "") {
        this.filteredStudents = this.students.filter(student =>
          student.firstName.toLowerCase().includes(this.searchText.toLowerCase())
        );
      } else {
        this.filteredStudents = this.students;
      }
    }, err => {
      alert("error")
    });
  }
  constructor(private _acrr: ActivatedRoute, private _router: Router, private _studentService: StudentService, private _sumDays: SumAbsenceDays) {
  }

  userId: number;

  ngOnInit(): void {
    this._acrr.paramMap.subscribe(paramMap => {
      if (paramMap.has("id")) {
        this.userId = +paramMap.get("id");
      }
    })
    this._studentService.getStudentsFromHttp().subscribe(res => {
      if (this.userId) {
        this.filteredStudents = res.filter(x => x.id == this.userId)
        this.students = res;
      }

      else {
        this.students = res;
        this.filteredStudents = res;
      }
      this.setupSearchObservable();
    });
  }

  private setupSearchObservable(): void {
    this.searchStudents$ = this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.searchStudents(term))
    );

    this.searchStudents$.subscribe((result: Student[]) => {
      this.filteredStudents = result;
    });
  }
}
