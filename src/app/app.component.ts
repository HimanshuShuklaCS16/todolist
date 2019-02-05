import { Component } from '@angular/core';
import {AddtolistComponent} from './addtolist/addtolist.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){}
  title = 'todolist';
}
