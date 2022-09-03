import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  newTodo: string;
  allTodos = [];
  completeTodos = [];

  constructor() { }

  test(newTodo: string) {
    console.log("test");
    this.allTodos.push(newTodo);
  }
}
