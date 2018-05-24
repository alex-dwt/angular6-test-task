import { Component, OnInit, Input } from '@angular/core';

import { StoreCard } from './storeCard.interface';

import { CardCommissionPipe } from './card-commission.pipe';

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css'],
  providers: [CardCommissionPipe]
})
export class StoreCardComponent implements OnInit {
  @Input() card: StoreCard;

  constructor() { }

  ngOnInit() {
  }

}
