/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform, Inject, forwardRef } from '@angular/core';
import { AutoGrid } from '../app.auto-grid';

@Pipe({
  name: 'gridPipe',


})

export class GridPipe implements PipeTransform {

  parent: AutoGrid;

  constructor(@Inject(forwardRef(() => AutoGrid)) parent: AutoGrid){

    console.log('pipe constructor');

  }

  transform(allValues: any[]) {


    console.log('invoked pipe transform');

    return allValues;

  }
}
