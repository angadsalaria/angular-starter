/**
 * Created by asalaria on 10/22/16.
 */

export class Sorting{


  constructor(public path: string, public isAscending: boolean){

  }

  //pertains to identifiers for lodash
  public getSortDescriptor = function(){

    return this.isAscending ? 'asc' : 'desc';

  }

}
