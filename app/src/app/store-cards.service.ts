import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreCardsService {

  private url = 'https://api.bonusway.com/campaigns';

  constructor(private http: HttpClient) {
  }

  getCards(order: string, limit: number, offset: number): Promise {
    return new Promise(resolve =>
      this
        .http
        .get(
          `${this.url}?limit=${limit}&offset=${offset}&order=${order}`,
          {headers: {'Accept-Language':'fi'}})
        .subscribe(
          data => resolve(
            data.items.map(o => ({
              id: o.id,
              title: o.title,
              commission: o.commission,
              fullImageUrl: o.full_image.url,
            }))
          )
        )
    );
  }
}
