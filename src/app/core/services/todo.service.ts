import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { TodoType } from '../types/todo-type';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private storeName = 'todos';

  constructor(private dbService: NgxIndexedDBService) {}

  public findAll(): Observable<TodoType[]> {
    return this.dbService.getAll(this.storeName);
  }
  public add(todo: TodoType) {
    console.log('a');
    this.dbService
      .add('todos', {
        id: `2`,
        title: `brucez@wayne.com`,
        createdAt: `2`,
        done: `true`,
      })
      .subscribe((key) => {
        console.log('key: ', key);
      });
  }
}
