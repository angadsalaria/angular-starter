/**
 * Created by asalaria on 10/9/2016.
 *
 * test plunkr: //https://plnkr.co/edit/KudLYPUww4r286iPzGTN?p=preview
 * viewchildren: https://plnkr.co/edit/LzkaD7v4NTB8nREMxHqi?p=preview
 * http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
 */


import * as _ from 'lodash';
import { Component, ElementRef, Input, Renderer, Inject, forwardRef } from '@angular/core';
import { AutoGrid } from './app.auto-grid';


@Component({
  selector    : 'th[auto-grid-enable]',
  templateUrl : 'app/auto-grid/templates/auto-grid-enable.html',
  providers   : []
})

export class AutoGridEnable {

  parent: AutoGrid;

  @Input('auto-grid-enable')
  column: string;

  @Input('enable-sort')
  enableSort: any;

  @Input('enable-filter')
  enableFilter: any;




  constructor(el: ElementRef, renderer: Renderer, @Inject(forwardRef(() => AutoGrid)) parent: AutoGrid) {

    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');



    this.parent = parent;

  }

  ngOnInit(){



  }

  isSortActive = function(){
    return this.enableSort != undefined;
  }

  isFilterActive = function(){
    return this.enableFilter != undefined;
  }

  getFilterItems = function(){

    return this.parent.getFilterOptions(this.column);

  }

  onFilterChange = function(filterSelection: any){

    this.parent.setFilterProperty(this.column, filterSelection);

    console.log(filterSelection);
  }

}
