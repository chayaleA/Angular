import { Component } from '@angular/core';
import { Priority, Task } from '../models-demo/task.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  priority = Priority;
  tasks : Task[] = [{id:1,name:"task1"},{id:2,name:"task2"},{id:3,name:"task3"}];
}
