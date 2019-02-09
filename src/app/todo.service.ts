import { Injectable } from '@angular/core';
import {Init} from './init.todos';
@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init{

  constructor() {
    super();
  console.log('todo service initialized');
this.load();
 }
  getTodos(){
    var todos=JSON.parse(localStorage.getItem('todos'));
    return todos;
  }
  addtodo(todo)
  {
    var todos=JSON.parse(localStorage.getItem('todos'));
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  deletetodo(todo){
    var todos=JSON.parse(localStorage.getItem('todos'));
    for(let i=0;i<todos.length;i++)
    {
      if(todos[i].text===todo)
      {
        todos.splice(i,1);
      }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
  updatetodo(oldtext,newtext){
    var todos=JSON.parse(localStorage.getItem('todos'));
    for(let i=0;i<todos.length;i++)
    {
      if(todos[i].text===oldtext)
      {
        todos[i].text=newtext;
      }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
  }
}
