import { Component } from '@angular/core';
import {AddtolistComponent} from './addtolist/addtolist.component';
import {TodoService} from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoService]
})
export class AppComponent {
  constructor(){}
  title = 'todolist';
}
