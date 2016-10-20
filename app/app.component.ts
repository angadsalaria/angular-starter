import { Component } from '@angular/core';
import { AutoGrid } from './auto-grid/app.auto-grid';


@Component({
  selector: 'parent-selector',
  templateUrl: 'app/templates/parent-selector.html',
  providers: [AutoGrid]
})
export class ParentComponent {

  message = "Hello!";

  gridData = [
    {id:1, fname: 'Angad', lname: 'Salaria'},
    {id:2, fname: 'John', lname: 'Doe'},
    {id:3, fname: 'Sam', lname: 'Adams'},
    {id:4, fname: 'John', lname: 'Adams'},
    {id:5, fname: 'Edward', lname: 'Miller'},
    {id:6, fname: 'Lawrence', lname: 'Krauss'}
  ];

  onNotify(message:string):void {
    alert(message);
  }
}
