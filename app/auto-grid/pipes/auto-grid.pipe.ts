/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gridPipe',
  pure: false
})

export class GridPipe implements PipeTransform {



  constructor(){



  }

  transform(allValues: any[], arg: any) {

    console.log(arg);

    return allValues;

  }
}
