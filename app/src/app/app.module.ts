import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { CardCommissionPipe } from './store-card/card-commission.pipe';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { SelectorComponent } from './selector/selector.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreCardComponent,
    CardCommissionPipe,
    FilterGroupComponent,
    SelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
