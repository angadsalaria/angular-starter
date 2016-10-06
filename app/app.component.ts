import { Component } from '@angular/core';
import { ChildComponent } from './app.child-component';

@Component({
  selector: 'parent-selector',
  template: `
                <div>  
                  <h1>I'm a container component. {{message}}</h1>
                  <child-selector (notify)='onNotify($event)'></child-selector>
                </div>  
            `
})
export class ParentComponent {

  message = "Hello!";

  onNotify(message:string):void {
    alert(message);
  }
}
