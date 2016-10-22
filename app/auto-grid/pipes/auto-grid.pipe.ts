/**
 * Created by asalaria on 10/15/16.
 */

import * as _ from 'lodash';
import { Pipe, PipeTransform, Injector, Host} from '@angular/core';
import { Selection } from '../classes/selection';


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

  transform(allValues: Array<Object>, selection: Selection) {

    var filter = _.omitBy(selection.filters, this.omitFn);

    return _.filter(allValues, filter);

  }
}
