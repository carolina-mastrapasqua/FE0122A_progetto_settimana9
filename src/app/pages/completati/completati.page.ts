import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss'],
})
export class CompletatiPage implements OnInit {
  listaTask: Todo[] = [];

  constructor(private taskService: TaskService) {}

  getTaskList() {
    setTimeout(() => {
      this.listaTask = this.taskService.getTaskList();
    }, 2000);
  }

  ngOnInit() {
    this.getTaskList();
  }
}
