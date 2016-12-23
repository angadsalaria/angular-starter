import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AutoGridEnable }  from './app.auto-grid-enable';
import { AutoGrid }  from './app.auto-grid';
import { GridPipe }  from './pipes/auto-grid.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule],
  declarations: [ AutoGrid, AutoGridEnable, GridPipe ],
  providers: [ ],
  bootstrap: [ ],
  exports: [ AutoGrid, AutoGridEnable, GridPipe ]
})
export class AutoGridModule { }
