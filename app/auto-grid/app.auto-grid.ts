/**
 * Created by asalaria on 10/5/2016.
 */
import { Component, Input, Injectable } from '@angular/core';
import { AutoGridEnable } from './app.auto-grid-enable';

@Component({
  selector: 'auto-grid',
  templateUrl: 'app/auto-grid/auto-grid.html',
  providers: []
})

@Injectable()
export class AutoGrid {

  @Input() data: Array<Object>;

  message = 'static data';

  clickFn = function(){
    console.log('here');
  };

  ngOnInit() {
    console.log('from auto-grid: ' + this.data);
  }
}
