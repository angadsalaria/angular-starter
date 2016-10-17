/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'gridPipe' })

export class GridPipe implements PipeTransform {

  transform(allValues: any[]) {


    console.log(allValues);

    return allValues.filter(value => value == 1);

  }
}
