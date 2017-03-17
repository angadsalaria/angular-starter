import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AutoGridModule } from './auto-grid/auto-grid.module';

import { ParentComponent }  from './app.component';

@NgModule({
  imports: [ AutoGridModule, BrowserModule, FormsModule ],
  declarations: [ ParentComponent ],
  bootstrap: [ ParentComponent  ],
  providers: [],
})
export class AppModule { }
