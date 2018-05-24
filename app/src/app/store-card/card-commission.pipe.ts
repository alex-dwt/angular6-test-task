import { Pipe, PipeTransform } from '@angular/core';
import {StoreCard} from "./storeCard.interface";

@Pipe({
  name: 'cardCommission'
})
export class CardCommissionPipe implements PipeTransform {

  transform(card: StoreCard, args?: any): string {
    return Number.parseFloat(card.commission.max.amount).toFixed(1)
      + card.commission.max.unit;
  }

}
