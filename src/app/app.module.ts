import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { HttpModule } from '@angular/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
