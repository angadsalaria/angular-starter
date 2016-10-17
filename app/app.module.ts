import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent }  from './app.component';
import { ChildComponent }  from './app.child-component';
import { AutoGridEnable }  from './auto-grid/app.auto-grid-enable';
import { AutoGrid }  from './auto-grid/app.auto-grid';
import { GridPipe }  from './auto-grid/pipes/auto-grid.pipe';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent, ChildComponent, AutoGridEnable, AutoGrid, GridPipe ],
  bootstrap: [ ParentComponent ]
})
export class AppModule { }
