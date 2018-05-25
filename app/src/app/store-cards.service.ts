import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class StoreCardsService {

  private url = 'https://api.bonusway.com/campaigns';

  constructor(private http: HttpClient) {
  }

  getCards(order: string, perPage: number, offset: number) {
    return new Promise(resolve =>
      this
        .http
        .get(
          `${this.url}?limit=${perPage}&offset=${offset}&order=${order}`,
          {headers: {'Accept-Language':'fi'}})
        .subscribe(
          data => resolve({
            count: data.total,
            items: data.items.map(o => ({
              id: o.id,
              title: o.title,
              commission: o.commission,
              fullImageUrl: o.full_image.url,
            }))
          })
        )
    );
  }
}
