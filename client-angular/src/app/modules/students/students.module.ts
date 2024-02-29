import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListStudentsComponent } from "./components/list-students/list-students.component";
import { StudentDetailsFormComponent } from "./components/student-details-form/student-details-form.component";
import { TestHistoryComponent } from "./components/test-history/test-history.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SumAbsenceDays } from "./services/sumAbsenceDays.model";
import { StudentService } from "./services/student.service";
import { AvgTests } from "./services/avgTests.service";
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RouterLink } from "@angular/router";

@NgModule({
    declarations: [ListStudentsComponent, StudentDetailsFormComponent, TestHistoryComponent, HomeComponent, PageNotFoundComponent],
    imports: [CommonModule,ReactiveFormsModule,FormsModule, BrowserAnimationsModule, HttpClientModule, RouterLink],
    providers: [StudentService,AvgTests,SumAbsenceDays],
    exports: [ListStudentsComponent]
})

export class StudentsModule {


}