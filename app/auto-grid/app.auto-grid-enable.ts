/**
 * Created by asalaria on 10/9/2016.
 */

import { Directive, ElementRef, Input, Renderer, Inject, forwardRef } from '@angular/core';
import { AutoGrid } from './app.auto-grid';

@Directive({ selector: '[autoGridEnable]' })

export class AutoGridEnable {

  constructor(el: ElementRef, renderer: Renderer, @Inject(AutoGrid) parent: AutoGrid) {

    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');

    console.log('here: ' + parent.data);
  }

}
