/**
 * Created by asalaria on 10/15/16.
 */

import * as _ from 'lodash';
import { Pipe, PipeTransform} from '@angular/core';

import { Selection } from '../classes/selection';
import { Sorting } from '../classes/sorting';

@Pipe({
  name: 'gridPipe',
  pure: false
})

export class GridPipe implements PipeTransform {


  private omitFn = function(value: any, key: string){
    return value === '';
  };


  private filter = function(allValues: Array<Object>, filters: Object){

    var filter = _.omitBy(filters, this.omitFn);

    return _.filter(allValues, filter);

  }

  private sort = function(sortables: Array<Object>, sortings: Sorting){

    if(sortings){

      return _.orderBy(sortables, [sortings.path], [sortings.getSortDescriptor()]);
    }

    return sortables;

  }

  transform(allValues: Array<Object>, selection: Selection) {


    var filtered = this.filter(allValues, selection.filters);

    var sorted = this.sort(filtered, selection.sortings);

    return sorted;

  }
}
