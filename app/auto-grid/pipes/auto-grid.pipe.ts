/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform, Injector, Host} from '@angular/core';
import { SharedService } from '../app.grid-service';
import { AutoGrid } from '../app.auto-grid';

@Pipe({
  name: 'gridPipe',
  pure: false
})

export class GridPipe implements PipeTransform {



  constructor(){


  }

  transform(allValues: any[], arg: any) {

    console.log(arg);

    //console.log(this.autoGrid);

    return allValues;

  }
}
