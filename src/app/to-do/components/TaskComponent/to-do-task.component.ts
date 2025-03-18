import { Component, OnInit, Input } from '@angular/core';
import { ToDO } from '../../interface/to-to.interface';
import { ToDoServiceService } from '../../service/to-do-service.service';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.scss'],
  standalone: false
})
export class ToDoTaskComponent  implements OnInit {

  constructor(private ToDoService: ToDoServiceService) { }

  @Input() task!: ToDO;
  Editable = false;
  editableTask!: ToDO;

  ngOnInit() {
    this.editableTask = { ...this.task }; 
  }

  Editar() {
    if (this.Editable) {
      this.actualizarTarea(); 
    }
    this.Editable = !this.Editable;
  }

  CambiarEstadoTarea(event: any) {
    this.task.done = event.detail.checked;
    this.actualizarEstadoTarea();
  }

  async borrarTarea(task: ToDO) {
    const response = await this.ToDoService.borrarTarea(task);
    console.log(response);
  }
  
  async actualizarTarea() {
    await this.ToDoService.actualizarTarea(this.editableTask);
    this.task = { ...this.editableTask }; 
  }

  async actualizarEstadoTarea() {
    const response = await this.ToDoService.actualizarEstadoTarea(this.task);
  }

}
