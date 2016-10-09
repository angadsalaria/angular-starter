import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent }  from './app.component';
import { ChildComponent }  from './app.child-component';
import { AutoGrid }  from './auto-grid/app.auto-grid';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent, ChildComponent, AutoGrid ],
  bootstrap: [ ParentComponent ]
})
export class AppModule { }
