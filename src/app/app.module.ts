import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { TaskFormComponent } from '../app/task-form/task-form.component';
import { TaskListComponent } from '../app/task-list/task-list.component';
import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


export interface Task {
  id: number;
  name: string;
  completed: boolean;
  deadline: Date;  
}
