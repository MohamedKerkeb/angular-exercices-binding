import { Component, OnInit, VERSION } from '@angular/core';
import { first } from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  yourName;
  data = this.dataService.getUsersData();
  searchApp;
  radioApp;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    // console.log(this.dataService.getUsersData());
  }

  filterRadio(radio) {
    console.log(radio);
  }

  onSearch(search: string = '', radio: string = 'first') {
    this.searchApp = search;
    this.radioApp = radio;
    console.log(radio);
    if (search) {
      this.data = this.dataService.getUsersData().filter((el) => {
        let array = el.name[radio].toLowerCase();
        return array.includes(search.toLowerCase());
      });
    } else {
      this.data = this.dataService.getUsersData();
    }
    // console.log(this.data);
  }
}
