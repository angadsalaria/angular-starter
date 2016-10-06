import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ParentComponent }  from './app.component';
import { ChildComponent }  from './app.child-component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ParentComponent, ChildComponent ],
  bootstrap: [ ParentComponent ]
})
export class AppModule { }
