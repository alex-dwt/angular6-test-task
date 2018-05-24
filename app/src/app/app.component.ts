import { Component } from '@angular/core';

import { StoreCard } from './store-card/storeCard.interface';
import {StoreCardsService} from "./store-cards.service";
import {FilterGroupValue} from "./filter-group/selectorResult.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StoreCardsService]
})
export class AppComponent {
  storeCards: Array<StoreCard> = [];
  currentOffset: number = 0;
  currentFilterGroupValue: FilterGroupValue;
  isLoadMoreBtnHidden: boolean = true;

  constructor(private storeCardsService: StoreCardsService) {
  }

  onApplyFilterClick(filterGroupValue: FilterGroupValue) {
    this.currentOffset = 0;
    this.currentFilterGroupValue = filterGroupValue;
    this.storeCards = [];

    this.loadCards();
  }

  onLoadMoreBtnClick() {
    this.loadCards();
  }

  onRemoveCardClick(cardId: string) {
    let pos = this.storeCards.findIndex(o => o.id === cardId);

    if (pos !== -1) {
      this.storeCards.splice(pos, 1);
    }
  }

  private loadCards() {
    this
      .storeCardsService
      .getCards(
        this.currentFilterGroupValue.orderBy,
        this.currentFilterGroupValue.perPage,
        this.currentOffset
      )
      .then(
        items => {
          this.storeCards = this.storeCards.concat(items);
          this.currentOffset += this.currentFilterGroupValue.perPage;

          this.isLoadMoreBtnHidden = !items.length;
        }
      );
  }
}
