import { Component } from '@angular/core';

@Component({
  selector: 'root-app',
  templateUrl: 'app/templates/root-app.html',

})
export class RootComponent {

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
