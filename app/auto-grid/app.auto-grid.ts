/**
 * Created by asalaria on 10/5/2016.
 */

import * as _ from 'lodash';
import { Component, Input, Injectable } from '@angular/core';
import { Selection } from './classes/selection';

@Component({
  selector    : 'auto-grid',
  templateUrl : 'app/auto-grid/templates/auto-grid.html',
  })

@Injectable()
export class AutoGrid {

  @Input() data: Array<Object>;

  selections = new Selection();


  getFilterOptions = function(path :string){

    var sorter:any = function( item: any ) { return item };

    var opts = _.sortBy(

                    _.uniq(
                      _.map(this.data, path)
                    ),
                    sorter
                  );

    return opts;

  };

  setFilterProperty = function(path :string, value :any){

    _.set(this.selections.filters, path, value);

  };

  unsetFilterProperty = function(path: string){

    _.unset(this.selections.filters, path);

  };

  setSortColumn = function(path: string){

    this.selections.sortings.update(path);

  }

  getCurrentSorting = function(){
    return this.selections.sortings;
  }

  getFilters = function(){
    return this.filters;
  }

}
