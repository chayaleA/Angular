import { Injectable } from "@angular/core";
import { StudentService } from "./student.service"
import { AbsenceDay } from "../models/absenceDays.model";
import { Student } from "../models/student.model";

@Injectable()
export class SumAbsenceDays {

    listStudent: Student[];

    getSumAbsenceDays(id: number): Promise<number> {
        return new Promise((resolve,reject) => {
            this._listStud.getStudentsFromHttp().subscribe((list) => {
                this.listStudent = list;
                var index = this.listStudent.findIndex((x) => x.id == id);
                var sum = 0;
                alert(this.listStudent[index].absenceDays)
                alert("I am hehr")
                this.listStudent[index].absenceDays.forEach((day) => {
                    sum += day.days;
                })
                resolve(sum);
            })
        })
    }

    constructor(private _listStud: StudentService) {

    }
}