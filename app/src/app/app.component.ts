import { Component } from '@angular/core';

import { StoreCard } from './store-card/storeCard.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storeCards: Array<StoreCard> = [
    {
      title: 'My title',
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
    {
      title: 'My title 2222',
      commission: {
        "max": {
          "amount": 555,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
    {
      title: 'My title 33333',
      commission: {
        "max": {
          "amount": 11111,
          "unit": "EUR",
          "original_amount": "25.0000",
          "boost_type": "campaign",
          "boost_amount": 1
        }
      },
      fullImageUrl: 'https://s3.eu-central-1.amazonaws.com/bonusbay-images/campaign_banner/ed543b7d7ee667bc107f730d95374047.png'
    },
  ];

  onLoadMoreBtnClick()
  {
    console.log('load more');
  }
}
