import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoServiceService } from '../../service/to-do-service.service';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
  standalone: false
})
export class ToDoFormComponent  implements OnInit {

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: ToDoServiceService
  ) 
    {
    this.todoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]], 
      description: ['', Validators.required], 
      date: ['', Validators.required], 
      done: [false]  
    });
   }

  ngOnInit() {}

  async submit() {
    if (this.todoForm.valid) {
      try {
        const response = await this.todoService.addTask(this.todoForm.value);
        console.log(response);
        this.resetForm();
      } catch (error) {
        console.error('Error al agregar la tarea:', error);
      }
    }
  }

  resetForm() {
    this.todoForm.reset({ done: false }); 
  }
  

}
