/**
 * Created by asalaria on 10/5/2016.
 */
import { Component, Input, Injectable } from '@angular/core';
import { AutoGridEnable } from './app.auto-grid-enable';
import { GridPipe } from './pipes/auto-grid.pipe'

@Component({
  selector    : 'auto-grid',
  templateUrl : 'app/auto-grid/templates/auto-grid.html',
  providers   : [],

})

@Injectable()
export class AutoGrid {

  @Input() data: Array<Object>;

  message = 'static message';

  getFilterOptions = function(path :string){
    console.log('here');
  };

  ngOnInit() {
    console.log('from auto-grid: ' + this.data);
  }

}
