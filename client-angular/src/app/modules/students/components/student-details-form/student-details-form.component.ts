import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student, Year } from '../../models/student.model';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import { APP_COURSES, Courses } from '../../models/courses.model';
import { SumAbsenceDays } from '../../services/sumAbsenceDays.model';
import { Test } from '../../models/test.model';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-details-form',
  templateUrl: './student-details-form.component.html'
})
export class StudentDetailsFormComponent implements OnInit {
  isExist: boolean = false
  students: Student[];

  missingFromDate: Date;
  missingDays: number;
  totalMissingDays: number = 0;

  coursesList: Courses[] = APP_COURSES;

  year_schoolType = Year;

  private _student: Student = new Student;

  public get student(): Student {
    return this._student;
  }

  MyformGroup: FormGroup = new FormGroup({});

  @Input()
  public set student(student: Student) {
    this._student = student;
    if (this._student != undefined) {
      this.MyformGroup = new FormGroup({
        "firstName": new FormControl(this._student.firstName, [Validators.required, Validators.minLength(3)]),
        "lastname": new FormControl(this._student.lastname, [Validators.required, Validators.maxLength(10)]),
        "address": new FormControl(this._student.address),
        "id": new FormControl(this._student.id, Validators.required),
        "phone": new FormControl(this._student.phone),
        "active": new FormControl(this._student.active),
        "description": new FormControl(this._student.description),
        "departureDate": new FormControl(this._student.departureDate),
        "averageMark": new FormControl(this._student.averageMark),
        "courseId": new FormControl(this._student.courseId, Validators.required),
        "year_school": new FormControl(this._student.year_school)
      })
    }
  }

  // @Output()
  // onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

  SaveStudent(s: Student) {
    // if (this.missingDays && this.missingDays > 0 && this.missingFromDate)
    //   this.student.absenceDays.push({ formDate: this.missingFromDate, days: this.missingDays });

    // this._sumDays.getSumAbsenceDays(this.student.id).then((sum)=>{
    //   this.totalMissingDays = sum;
    // })
    const tests = this.student.testArr;
    this.student = this.MyformGroup.value;
    this.student.testArr = tests;
    // this.onSaveNewStudent.emit(this.student);
    if (this.isExist) {
      this._studentService.updateStudentToService(this.student, this.student.id).subscribe();
    }
    else {
      this._studentService.addStudentToService(this.student).subscribe();
    }
    this.router.navigate(["/students"])
  }

  @Output()
  firstFocus: EventEmitter<any> = new EventEmitter();
  flagFirstFocus: boolean = false;

  focusEvent() {
    if (!this.flagFirstFocus) {
      this.firstFocus.emit();
      this.flagFirstFocus = true;
    }
  }

  constructor(private _studentService: StudentService, private router: Router, private _acrr: ActivatedRoute, private _sumDays: SumAbsenceDays) {
  }

  studentId: number;
  ngOnInit(): void {
    this._studentService.getStudentsFromHttp().subscribe(res => {
      this.students = res;
      console.log("this_student")
      this._acrr.paramMap.subscribe(paramMap => {
        if (paramMap.has("id")) {
          this.studentId = +paramMap.get("id");
          var index = this.students.findIndex((student) => student.id == this.studentId);
          if (index != -1) {
            this.isExist = true
            this.student = this.students[index]
          }
          else {
            this.student = new Student()
            this.student.id = 1;
          }
        }
      })
    })
  }
}
