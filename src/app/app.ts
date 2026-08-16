import { Component } from '@angular/core';
import { TodoWrapper } from './components/todo-wrapper/todo-wrapper';

@Component({
  selector: 'app-root',
  imports: [TodoWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}