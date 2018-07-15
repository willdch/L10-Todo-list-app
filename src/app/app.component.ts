import { Component } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { Todo } from './todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService],
})
export class AppComponent {
  title = 'L10-todo-app';

 


  constructor(private todoDataService: TodoDataService) {
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}


