/**
 * Created by asalaria on 10/5/2016.
 */
import * as _ from 'lodash';
import { Component, Input, Injectable } from '@angular/core';

@Component({
  selector    : 'auto-grid',
  templateUrl : 'app/auto-grid/templates/auto-grid.html',

})

@Injectable()
export class AutoGrid {

  @Input() data: Array<Object>;

  filters = {};

  message = 'static message';

  getFilterOptions = function(path :string){


    var opts = _.uniq(
                  _.map(this.data, path)
                );

    return opts;
  };

  setFilterProperty = function(path :string, value :any){

    //_.set(this.filters, path, value);
    //console.log(this.filters);
  }

  ngOnInit() {


  }

  getFilters = function(){
    return this.filters;
  }

}
