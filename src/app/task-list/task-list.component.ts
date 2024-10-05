// components/task-list/task-list.component.ts
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from '../task.service';
import { Task } from '../app.module';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;  
  filter: string = 'all';      

  constructor(private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$; 
  }

  
  completeTask(taskId: number) {
    this.taskService.markTaskCompleted(taskId);
  }

 
  filterTasks(filter: string) {
    this.filter = filter;
    if (filter === 'completed') {
      this.tasks$ = this.taskService.getTasksByStatus(true);
    } else if (filter === 'pending') {
      this.tasks$ = this.taskService.getTasksByStatus(false);
    } else {
      this.tasks$ = this.taskService.tasks$;  
    }
  }
}
