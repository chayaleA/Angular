import { AbsenceDay } from "./absenceDays.model";
import { Test } from "./test.model";
export class Student {
    id: number;
    firstName: string;
    lastname: string;
    address: string;
    phone: string;
    active: boolean;
    mail: string;
    averageMark: number;
    departureDate?: Date;
    description?: string;
    courseId?: number;
    year_school?:Year;
    testArr?:Test[];
    absenceDays?:AbsenceDay[] = [];

    constructor() {
        this.id = 0;
        this.firstName = "";
        this.lastname = "";
        this.address = "";
        this.mail = "";
        this.phone = "";
        this.active = false;
        this.averageMark = 0;
        this.testArr = [],
        this.absenceDays = [],
        this.departureDate = null,
        this.description = "",
        this.courseId = 0;
        this.year_school = null
    }
}
export enum Year {
    first_year = 1,
    second_year = 2,
    third_year = 3
}