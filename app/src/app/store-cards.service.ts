import { Injectable } from '@angular/core';
import {StoreCard} from "./store-card/storeCard.interface";

@Injectable()
export class StoreCardsService {

  constructor() { }

  getCards(order: string, limit: number, offset: number): Array<StoreCard>
  {
    return [
      {
        id: Math.random() * 1000,
        title: 'My title ' + Math.random() * 1000,
        commission: {
          "max": {
            "amount": 25,
            "unit": "EUR",
            "original_amount": "25.0000",
            "boost_type": "campaign",
            "boost_amount": 1
          }
        },
        fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
      },
    ];
  }
}
