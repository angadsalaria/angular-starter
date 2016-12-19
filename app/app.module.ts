import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AutoGridModule } from './auto-grid/auto-grid.module';

import { RootComponent }  from './app.component';

@NgModule({
  imports: [ AutoGridModule, BrowserModule, FormsModule ],
  declarations: [ RootComponent ],
  bootstrap: [ RootComponent  ],
  providers: [],
})
export class AppModule { }
