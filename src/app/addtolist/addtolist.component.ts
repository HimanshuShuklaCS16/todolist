import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.css']
})
export class AddtolistComponent implements OnInit {
todos;
text1;
oldtext;
appState="default";
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
    this.todos=this.todoservice.getTodos();
  }
addTodos(){
  var newtodo={text:this.text1}
  this.todos.push(newtodo);
  this.todoservice.addtodo(newtodo);
}
deletetodo(todotext){
  for(let i=0;i<this.todos.length;i++)
  {
    if(this.todos[i].text===todotext)
    {
      this.todos.splice(i,1);
    }
  }
  this.todoservice.deletetodo(todotext);
}
editTodo(todo)
{
  this.appState="edit";
  this.oldtext=todo.text;
  this.text1=todo.text;
}
updateTodos()
{
  for(let i=0;i<this.todos.length;i++)
  {
    if(this.todos[i].text===this.oldtext)
    {
      this.todos[i].text=this.text1;
    }
  }
    this.todoservice.updatetodo(this.oldtext,this.text1);
    this.appState="default";
}
}
