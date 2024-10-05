// services/task.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../app/app.module';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksSubject = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksSubject.asObservable();  

  constructor() {}


  addTask(task: Task) {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, task]);
  }


  markTaskCompleted(taskId: number) {
    const updatedTasks = this.tasksSubject.value.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: true };  
      }
      return task;
    });
    this.tasksSubject.next(updatedTasks);  
  }


  getTasksByStatus(completed: boolean) {
    const filteredTasks = this.tasksSubject.value.filter(task => task.completed === completed);
    return new BehaviorSubject(filteredTasks).asObservable();  
  }
}