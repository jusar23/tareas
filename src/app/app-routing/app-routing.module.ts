import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from '../task-form/task-form.component';
import { TaskListComponent } from '../task-list/task-list.component';

const routes: Routes = [
  { path: 'create-task', component: TaskFormComponent },
  { path: 'list-tasks', component: TaskListComponent },
  { path: '', redirectTo: '/list-tasks', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/list-tasks' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
