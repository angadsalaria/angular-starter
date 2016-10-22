/**
 * Created by asalaria on 10/5/2016.
 */
import * as _ from 'lodash';
import { Component, Input, Injectable } from '@angular/core';
import { Selection } from './classes/selection';
import { SharedService } from './app.grid-service';
import { Sorting } from './classes/sorting';

@Component({
  selector    : 'auto-grid',
  templateUrl : 'app/auto-grid/templates/auto-grid.html',
  providers: [SharedService]
})

@Injectable()
export class AutoGrid {

  @Input() data: Array<Object>;

  selections = new Selection();

  message = 'static message';

  constructor(public sharedService: SharedService){

  }

  getFilterOptions = function(path :string){


    var opts = _.uniq(
                  _.map(this.data, path)
                );

    return opts;

  };

  setFilterProperty = function(path :string, value :any){

    _.set(this.selections.filters, path, value);

  }

  setSortColumn = function(path: string){

    //var isAscending = !this.selections.sortings.isAscending;

    this.selections.sortings.update(path);


  }

  getCurrentSorting = function(){
    return this.selections.sortings;
  }

  getFilters = function(){
    return this.filters;
  }

}
