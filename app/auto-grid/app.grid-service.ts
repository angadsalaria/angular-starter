/**
 * Created by asalaria on 10/19/2016.
 */

import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {

  dataArray: string[] = [];
  someVal = 'somVal';

  insertData(data: string){
    this.dataArray.unshift(data);
  }
}
