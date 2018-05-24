import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {SelectorOption} from "./selectorOption.interface";

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Input() options: Array<SelectorOption>;
  @Output() onSelection = new EventEmitter<string>();

  isHidden: boolean = true;

  selectedText: string;

  constructor() { }

  ngOnInit() {
    this.selectedText = this.options[0].text;
    this.onSelection.emit(this.options[0].value);
  }

  onSelectValueClick(option: SelectorOption) {
    this.selectedText = option.text;
    this.onSelection.emit(option.value);
    this.isHidden = true;
  }

  onLabelClick(): void {
    this.isHidden = !this.isHidden;
  }
}
