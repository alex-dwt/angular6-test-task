import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoreCard} from "../store-card/storeCard.interface";

@Component({
  selector: 'app-removable-store-card',
  templateUrl: './removable-store-card.component.html',
  styleUrls: ['./removable-store-card.component.css']
})
export class RemovableStoreCardComponent implements OnInit {
  @Input() card: StoreCard;
  @Output() onRemoveCard = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onCrossClick(cardId: string) {
    this.onRemoveCard.emit(cardId);
  }
}
