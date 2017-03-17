/**
 * Created by asalaria on 10/9/2016.
 *
 * test plunkr: //https://plnkr.co/edit/KudLYPUww4r286iPzGTN?p=preview
 * https://plnkr.co/edit/U3nzaesTk8X1Z9wzSmJx?p=preview
 * https://plnkr.co/edit/dwwaJhswZLaOk2TFBbVz?p=preview
 * viewchildren: https://plnkr.co/edit/LzkaD7v4NTB8nREMxHqi?p=preview
 * https://www.youtube.com/watch?v=4YmnbGoh49U&feature=youtu.be
 * http://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
 */

import * as _ from 'lodash';
import {Component, ElementRef, Input, Renderer, Inject, forwardRef} from "@angular/core";
import {AutoGrid} from "./app.auto-grid";

@Component({
  selector: 'th[auto-grid-enable]',
  templateUrl: 'app/auto-grid/templates/auto-grid-enable.html',
  styleUrls: ['app/auto-grid/styles/auto-grid-styles.css']

})

export class AutoGridEnable {

  parent: AutoGrid;

  @Input('auto-grid-enable')
  column: string;

  @Input('sort-enabled')
  sortEnabled: boolean;

  @Input('select-enabled')
  selectEnabled: boolean;

  filterSelection: any;


  constructor(el: ElementRef, renderer: Renderer, @Inject(forwardRef(() => AutoGrid)) parent: AutoGrid) {

    this.parent = parent;

  }

  ngOnInit() {

    this.selectEnabled = !_.isUndefined(this.selectEnabled);
    this.sortEnabled = !_.isUndefined(this.sortEnabled);


  }

  isFilterActive = function () {
    return this.selectEnabled;
  }


  getGridSorting = function () {
    return this.parent.getCurrentSorting();
  }

  getFilterItems = function () {

    return this.parent.getFilterOptions(this.column);

  }

  onFilterChange = function (filterSelection: any) {

    this.parent.setFilterProperty(this.column, filterSelection);

  }

  resetFilter = function () {

    this.filterSelection = null;

    this.parent.unsetFilterProperty(this.column);

  }

  onSortChange = function () {

    if (this.sortEnabled) {

      this.parent.setSortColumn(this.column, this.isAscending);

    }

  }


  isAscending = function () {

    var sortings = this.getGridSorting();

    if (sortings.path != this.column) {
      return null;
    }

    return sortings.isAscending === false && sortings.path == this.column;


  }

}
