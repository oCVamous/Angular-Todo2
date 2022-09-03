import { Component, Inject } from '@angular/core';
// import { DialogAddTodoComponent } from './dialog-add-todo/dialog-add-todo.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAddTodoComponent } from './dialog-add-todo/dialog-add-todo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TodosService } from './todos.service';

import { DialogExampleComponent } from './dialog-example/dialog-example.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  constructor(public dialog : MatDialog, public todosService: TodosService) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogAddTodoComponent);
}
}