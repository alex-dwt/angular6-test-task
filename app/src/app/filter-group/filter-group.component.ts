import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-group',
  templateUrl: './filter-group.component.html',
  styleUrls: ['./filter-group.component.css']
})
export class FilterGroupComponent implements OnInit {

  isHidden: boolean = true;

  orderByOptions = [
    {
      text: 'Popularity',
      value: 'popularity'
    },
    {
      text: 'Creation',
      value: 'creation'
    },
    {
      text: 'Name',
      value: 'name'
    },
    {
      text: 'Trending',
      value: 'trending'
    },
  ];

  perPageOptions = [
    {
      text: '10',
      value: '10'
    },
    {
      text: '20',
      value: '20'
    },
    {
      text: '30',
      value: '30'
    },
  ];

  perPageValue: string;
  orderByValue: string;

  constructor() { }

  ngOnInit() {
  }

  onLabelClick(): void {
    this.isHidden = !this.isHidden;
  }

  onApplyClick(): void {
    console.log(this.orderByValue)
    console.log(this.perPageValue)

    this.isHidden = true;
  }

  onOrderBySelection(value: string)
  {
    this.orderByValue = value;
  }

  onPerPageSelection(value: string)
  {
    this.perPageValue = value;
  }
}
