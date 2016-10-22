/**
 * Created by asalaria on 10/15/16.
 */

import { Pipe, PipeTransform, Injector, Host} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'gridPipe',
  pure: false
})

export class GridPipe implements PipeTransform {



  constructor(){


  }

  private omitFn = function(value: any, key: string){
    return value === '';
  };

  transform(allValues: Array<Object>, selections: Object) {

    var filter = _.omitBy(selections.filters, this.omitFn);

    return _.filter(allValues, filter);

  }
}
