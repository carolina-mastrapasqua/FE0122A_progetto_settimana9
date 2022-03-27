import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/todos.service';
import { Todo } from 'src/app/models/todo';

@Component({
  templateUrl: './todos.page.html',
  styleUrls: ['./todos.page.scss'],
})
export class TodosPage implements OnInit {
  nomeTask!: string;
  listaTask: Todo[] = [];
  testo!: string;

  constructor(private taskService: TaskService) {}

  getTaskList() {
    this.listaTask = this.taskService.getTaskList();
  }

  addTask(nomeTask: string) {
    this.nomeTask.trim();
    this.nomeTask = ' ';
    setTimeout(() => {
      this.taskService.addTask(nomeTask);
    }, 2000);
  }

  completedTask(id: number) {
    setTimeout(() => {
      this.taskService.completedTask(id);
    }, 2000);
  }

  ngOnInit() {
    this.getTaskList();
  }
}
