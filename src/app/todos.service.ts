import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  newTodo!: string;
  allTodos: any[] = [];
  completeTodos = [];

  constructor() {
    this.loadFromLocalStorage()
  }

  /**
   * The new todo is stored in the array allTodos and then loaded into the local storage
   * @param newTodo 
   */
  saveTodo(newTodo: string) {
    this.allTodos.push(newTodo);
    this.saveToLocalStorage();
  }
  /**
   * Marks the todo as finished by a check
   * @param currentTodo 
   */
  finishTodo(currentTodo: string) {
    this.completeTodos.push(currentTodo); //current todo is stored in completeTodos
    this.allTodos.splice(this.allTodos.indexOf(currentTodo), 1);
    this.saveToLocalStorage();
  }

  /**
   * To delete the right todo I access the array allTodo and find out the index of the currentTodo.
   * With this index I delete exactly this index position of the allTodo.
   * Then I push the new edited todo (which in this case is a newTodo) into allTodo
   * @param newTodo 
   * @param currentTodo 
   */
  updateTodo(newTodo: string, currentTodo: string) {
    this.allTodos.splice(this.allTodos.indexOf(currentTodo), 1);
    this.allTodos.push(newTodo);
    this.saveToLocalStorage();
  }
  /**
   * deletes the todo from the array completeTodos and updates the local storage
   * @param currentTodo 
   */
  deleteTodo(currentTodo: string) {
    this.completeTodos.splice(this.completeTodos.indexOf(currentTodo), 1);
    this.saveToLocalStorage();
  }
  /**
   * sortiert alle todos (auch allTodos und completeTodos) und aktualisiert den lokalen Speicher
   */
  sortTodos() {
    this.allTodos.sort();
    this.completeTodos.sort();
    this.saveToLocalStorage();
  }

  /**
   * Step 1: Create memory variable and make array a text
   * Step2: Create key and make the arrayText 
   */
  saveToLocalStorage() {
    let TodoAsText = JSON.stringify(this.allTodos); //stringify --->converts a JavaScript value to a JSON string
    let CompleteTodoAsText = JSON.stringify(this.completeTodos);

    localStorage.setItem('allTodos', TodoAsText);
    localStorage.setItem('completeTodos', CompleteTodoAsText);
  }

  /**
   * Step1: Access the key and store it in variable.
   * Step2: Convert the text back to a JSON object
   */
  loadFromLocalStorage() {
    let allTodosAsText = localStorage.getItem('allTodos'); //'allTodos' = key
    let completeTodosAsTest = localStorage.getItem('completeTodos');

    if (allTodosAsText && completeTodosAsTest) {
      this.allTodos = JSON.parse(allTodosAsText); //Parse a string (written in JSON format) and return a JavaScript object:
      this.completeTodos = JSON.parse(completeTodosAsTest);
    }
  }
}
