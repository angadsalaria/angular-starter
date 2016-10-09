/**
 * Created by asalaria on 10/5/2016.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'auto-grid',
  templateUrl: 'app/auto-grid/auto-grid.html'
})
export class AutoGrid {

  @Input() data: Array<Object>;

  clickFn = function(){
    console.log('here');
  };

  ngOnInit() {
    console.log(this.data);
  }
}
