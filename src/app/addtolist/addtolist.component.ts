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
}
}
