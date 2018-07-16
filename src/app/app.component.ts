import { Component } from '@angular/core';
import { TodoDataService } from './services/todo-data.service';
import { Todo } from './todo';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'L10-todo-app';

 
newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }


  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}


