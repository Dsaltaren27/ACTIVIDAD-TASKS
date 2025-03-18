import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../service/to-do-service.service';
import { ToDO } from '../../interface/to-to.interface';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
  standalone: false
})
export class ToDoListComponent  implements OnInit {

  constructor(private toDoservice: ToDoServiceService) { }

  tasks: ToDO[] = [];

  ngOnInit() {
    this.toDoservice.obtenerTarea().subscribe( tasks => {
      this.tasks = tasks;
      console.log(this.tasks);
    })
  }


}
