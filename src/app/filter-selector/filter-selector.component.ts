import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})
export class FilterSelectorComponent implements OnInit {
  @Output() radioInput = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  radioThis(radio) {
    this.radioInput.emit(radio.target.value);
  }
}
