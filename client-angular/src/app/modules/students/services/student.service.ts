import { Injectable } from "@angular/core";
import { Student } from "../models/student.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const STUDENTS = [
  {
    id: 123456789,
    firstName: "chaya",
    lastname: "avramovitz",
    address: "bar ilan 18",
    phone: "0548529696",
    active: true,
    mail: "chayale96@gmail.com",
    averageMark: 0,
    description: "I am an amazing girl",
    testArr: [{ nameOfTest: "English", mark: 100, kode: 1, date: new Date(2023, 10, 23) },
    { nameOfTest: "Math", mark: 100, kode: 2, date: new Date(2023, 10, 23) }],
    absenceDays: []
  },
  {
    id: 325449940,
    firstName: "yaeli",
    lastname: "avramovitz",
    address: "bar ilan 18",
    phone: "0548529696",
    active: false,
    mail: "chayale96@gmail.com",
    averageMark: 0,
    departureDate: new Date(2023, 10, 23),
    testArr: [{ nameOfTest: "English", mark: 40, kode: 3, date: new Date(2023, 10, 23) },
    { nameOfTest: "Math", mark: 100, kode: 4, date: new Date(2023, 10, 23) }],
    absenceDays: []
  },
  {
    id: 32544,
    firstName: "pnina",
    lastname: "avramovitz",
    address: "bar ilan 18",
    phone: "0548529696",
    active: true,
    mail: "chayale96@gmail.com",
    averageMark: 0,
    testArr: [{ nameOfTest: "English", mark: 100, kode: 5, date: new Date(2023, 10, 23) },
    { nameOfTest: "Math", mark: 100, kode: 6, date: new Date(2023, 10, 23) }],
    absenceDays: []
  },
  {
    id: 49940,
    firstName: "ruti",
    lastname: "avramovitz",
    address: "bar ilan 18",
    phone: "0548529696",
    active: false,
    mail: "chayale96@gmail.com",
    averageMark: 0,
    departureDate: new Date(2023, 10, 23),
    testArr: [{ nameOfTest: "English", mark: 100, kode: 7, date: new Date(2023, 10, 23) },
    { nameOfTest: "Math", mark: 100, kode: 8, date: new Date(2023, 10, 23) }],
    absenceDays: []
  }]

@Injectable()
export class StudentService {

  //BEFORE WE LEARNT ABOUT THE REAL SERVICE
  // getStudents(): Promise<Student[]> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(STUDENTS)
  //     }, 1)
  //   })
  // }

  //AFTER WE LEARN ABOUT THE REAL SERVICE

  //with promise

  // getStudentsFromHttp(): Promise<Student[]> {
  //   return new Promise(res => {
  //     this._http.get<Student[]>("https://localhost:7273/api/Students").subscribe(data => {
  //       res(data)
  //     })
  //   }
  //   )
  // }

  //with observable

  getStudentsFromHttp(): Observable<Student[]> {
    return this._http.get<Student[]>("/api/Students");
  }

  getActiveStudents(active: boolean): Observable<Student[]> {
    return this._http.get<Student[]>("/api/Students/" + active)
  }

  addStudentToService(student: Student): Observable<boolean> {
    // console.log(student)
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this._http.post<boolean>("/api/Students/", student, { headers });
    return this._http.post<boolean>("/api/Students/", student);
  }

  deleteStudentFromService(id: Number): Observable<boolean> {
    return this._http.delete<boolean>("/api/Students/" + id)
  }

  updateStudentToService(updateStudent: Student, id: Number): Observable<boolean> {
    return this._http.put<boolean>("/api/Students/" + id, updateStudent)
  }

  constructor(private _http: HttpClient) {
  }
}