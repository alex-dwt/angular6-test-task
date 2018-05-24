import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { CardCommissionPipe } from './store-card/card-commission.pipe';
import { FilterGroupComponent } from './filter-group/filter-group.component';
import { SelectorComponent } from './selector/selector.component';
import { RemovableStoreCardComponent } from './removable-store-card/removable-store-card.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    StoreCardComponent,
    CardCommissionPipe,
    FilterGroupComponent,
    SelectorComponent,
    RemovableStoreCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
