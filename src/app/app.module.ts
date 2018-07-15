import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { TodoListHeaderComponent } from './components/todo-list-header/todo-list-header.component';
import { HttpModule } from '@angular/http';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './components/todo-list-footer/todo-list-footer.component';
import { TodoDataService } from './services/todo-data.service';



@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
