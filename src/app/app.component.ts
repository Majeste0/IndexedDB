import { Component, OnInit } from '@angular/core';
import { TodoService } from '@services/todo.service';
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

  public constructor(private _todoService: TodoService) {}

  ngOnInit(): void {
    this._todoService
      .findAll()
      .pipe(take(1))
      .subscribe((todos: Array<TodoType>) => {
        this.todos = todos;
      });
  }
}
