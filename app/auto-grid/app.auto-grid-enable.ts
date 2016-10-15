/**
 * Created by asalaria on 10/9/2016.
 *
 * test plunkr: //https://plnkr.co/edit/KudLYPUww4r286iPzGTN?p=preview
 * viewchildren: https://plnkr.co/edit/LzkaD7v4NTB8nREMxHqi?p=preview
 * http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
 */



import { Component, ElementRef, Input, Renderer, Inject, forwardRef } from '@angular/core';
import { AutoGrid } from './app.auto-grid';

@Component({
  selector: '[auto-grid-enable]',
  template: '<ng-content></ng-content>',
  providers: [AutoGrid]
})

export class AutoGridEnable {

  parent: AutoGrid;

  constructor(el: ElementRef, renderer: Renderer, parent: AutoGrid) {

    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');

    console.log('in child constructor: ' + parent.message);

    this.parent = parent;

  }

  ngOnInit(){

    console.log('from child ngOnInit: ' + this.parent.message);

  }

}
