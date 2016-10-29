/**
 * Created by asalaria on 10/5/2016.
 */
import { Component, Output, EventEmitter, Inject, forwardRef } from '@angular/core';
import {ParentComponent} from "./app.component";


@Component({
  selector: 'child-selector',
  template: `
              <h2>Hi, I'm a nested component. {{message}}</h2>  
              <span (click)='onClick()'>Click me please!</span>  
            `
})
export class ChildComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();

  message: string;

  constructor(@Inject(forwardRef(() => ParentComponent)) parent: ParentComponent){

      this.message = parent.message;

  }

  onClick() {
    this.notify.emit('Click from nested component');
  }
}
