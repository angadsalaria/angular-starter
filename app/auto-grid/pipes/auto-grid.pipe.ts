/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform} from '@angular/core';
import { SharedService } from '../app.grid-service';

@Pipe({
  name: 'gridPipe',
  pure: false
})

export class GridPipe implements PipeTransform {



  constructor(private sharedService: SharedService){



  }

  transform(allValues: any[], arg: any) {

    console.log(this.sharedService.dataArray);

    return allValues;

  }
}
