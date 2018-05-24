import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreCardComponent } from './store-card/store-card.component';
import { CardCommissionPipe } from './store-card/card-commission.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreCardComponent,
    CardCommissionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
