import { Component, OnInit } from "@angular/core";
import { StudentService } from "./modules/students/services/student.service";
import { Student } from "./modules/students/models/student.model";
import { Observable, from } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { DirectionService } from "./modules/demo/directive-demo/direction.service";

@Component({
    templateUrl: "app.component.html",
    selector: "app-root"
})

export class AppComponent implements OnInit {
    showParentLife:boolean = true;
    
    students: Student[];

    sendEmail: Observable<string>;

    sendEmail2: Observable<string>;

    ngOnInit(): void {
        this._students.getStudentsFromHttp().subscribe((res) => {
            this.students = res;

            this.sendEmail = new Observable((observer) => {
                for (var i = 0; i < this.students.length; i++) {
                    //send email
                    if (this.students[i].active == false)
                        continue;
                    else {
                        observer.next("The mail was sended successfully to address: " + this.students[i].mail)
                    }
                }
            })

            this.sendEmail2 = from(this.students).pipe(filter(student => student.active == true),map((student) => {
                return ("The mail was sended successfully to address: " + student.mail)
            }))
        })


    }
    constructor(private _students: StudentService) {

    }
    title: string = "My classroom";
    currentHour = new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    time() {
        const currentTime = new Date();
        const currentHour = currentTime.getHours();
        if (currentHour >= 7 && currentHour < 12)
            return "Good Morning";
        if (currentHour >= 12 && currentHour < 18)
            return "Good Afternoon";
        if (currentHour >= 18 && currentHour < 24)
            return "Good Evening";
        return "Good Night";
    }

    onClick() {
        this.sendEmail2.subscribe((massage) => {
            alert(massage);
        })
    }
}