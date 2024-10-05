import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskForm: FormGroup;

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      deadline: ['', Validators.required],
      people: this.fb.array([])  
    });
  }

  
  get people(): FormArray {
    return this.taskForm.get('people') as FormArray;
  }

  
  addPerson() {
    const personForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      age: ['', [Validators.required, Validators.min(18)]],
      skills: this.fb.array([this.newSkill()])  
    });
    this.people.push(personForm);  
  }

 
  newSkill(): FormControl {
    return this.fb.control('', Validators.required);
  }

 
  getSkills(index: number): FormArray {
    return this.people.at(index).get('skills') as FormArray;
  }


  addSkill(personIndex: number) {
    const skillsArray = this.getSkills(personIndex);
    skillsArray.push(this.newSkill());
  }

 
  removeSkill(personIndex: number, skillIndex: number) {
    const skillsArray = this.getSkills(personIndex);
    skillsArray.removeAt(skillIndex);
  }

 
  removePerson(index: number) {
    this.people.removeAt(index);
  }

  
  submitTask() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.taskForm.value);
      this.taskForm.reset(); 
    }
  }
}
