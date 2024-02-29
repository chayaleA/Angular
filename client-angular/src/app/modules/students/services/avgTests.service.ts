import { Injectable } from "@angular/core"
import { StudentService } from "./student.service"
import { Student } from "../models/student.model"

@Injectable()
export class AvgTests {
    listStud: Student[];
    getAvg(id: number): Promise<number> {
        return new Promise((resolve, reject) => {
            this._listStudents.getStudentsFromHttp().subscribe((list) => {
            
                this.listStud = list;
                var index = this.listStud.findIndex((student) => student.id == id);
                var sum = 0, count = 0; 
                if(this.listStud[index].testArr.length > 0){
                    this.listStud[index].testArr?.forEach((test) => { sum += test.mark; count++ });
                }
                resolve(sum / count);
            })
        })
    }
    constructor(private _listStudents: StudentService) {   
    }
}