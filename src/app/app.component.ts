import { Component, OnInit } from '@angular/core';
import { TodoService } from '../app/core/services/todo.service';
import { take } from 'rxjs';
import { TodoType } from './core/types/todo-type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todo';
  todos: Array<TodoType> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService
      .findAll()
      .pipe(take(1))
      .subscribe((todos: Array<TodoType>) => {
        this.todos = todos;
      });
  }
  addTodo() {
    const newTodo: TodoType = {
      id: 1,
      title: 'Nouveau',
      createdAt: new Date(),
      done: false,
    };

    this.todoService.add(newTodo);
  }
}
