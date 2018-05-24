import { Component } from '@angular/core';

import { StoreCard } from './store-card/storeCard.interface';
import {StoreCardsService} from "./store-cards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StoreCardsService]
})
export class AppComponent {
  storeCards: Array<StoreCard> = [];

  constructor(private storeCardsService: StoreCardsService) {
  }

  onLoadMoreBtnClick() {
    this.storeCards = this.storeCards.concat(this.storeCardsService.getCards('a',1,1));
  }

  onRemoveCardClick(cardId: string) {
    let pos = this.storeCards.findIndex(o => o.id === cardId);

    if (pos !== -1) {
      this.storeCards.splice(pos, 1);
    }
  }
}
