/**
 * Created by asalaria on 10/22/16.
 */


import {Sorting} from './sorting'

export class Selection{


  filters = {};

  sortings: Sorting;

  constructor(){

    this.sortings = new Sorting(null, null);

  }


}



