/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform} from '@angular/core';
import { AutoGrid } from '../app.auto-grid';

@Pipe({
  name: 'gridPipe',
})

export class GridPipe implements PipeTransform {

  private parent: AutoGrid;

  constructor(parent: AutoGrid){

    this.parent = parent;

  }

  transform(allValues: any[]) {

    return allValues;

  }
}
