import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtolist',
  templateUrl: './addtolist.component.html',
  styleUrls: ['./addtolist.component.css']
})
export class AddtolistComponent implements OnInit {
todos;
Text;
  constructor() { }

  ngOnInit() {
    this.todos=[{text:"himanshu1"},{text:"himanshu2"},{text:"himanshu3"}];
  }
addTodos(){
  console.log(this.Text);
}
}
