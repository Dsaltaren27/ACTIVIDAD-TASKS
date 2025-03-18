import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoFormComponent } from './components/FormComponent/to-do-form.component';
import { ToDoListComponent } from './components/ListComponent/to-do-list.component';
import { ToDoTaskComponent } from './components/TaskComponent/to-do-task.component';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ToDoFormComponent, ToDoListComponent, ToDoTaskComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports: [ToDoFormComponent, ToDoListComponent, ToDoTaskComponent]
})  
export class ToDoModule { }
