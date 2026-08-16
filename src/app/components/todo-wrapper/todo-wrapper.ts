import { Component } from '@angular/core';
import { TodoForm } from '../todo-form/todo-form';
import { TodoList } from '../todo-list/todo-list';

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoForm, TodoList],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.css'
})
export class TodoWrapper {

  todos: string[] = [];

  addTask(task: string) {
    this.todos.push(task);
  }

}