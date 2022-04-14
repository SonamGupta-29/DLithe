import { Component, OnInit } from '@angular/core';
import { store } from 'src/store.mock';

@Component({
  selector: 'app-store-item',
  templateUrl: './store-item.component.html',
  styleUrls: ['./store-item.component.css']
})
export class StoreItemComponent implements OnInit {
  item=store;
  constructor() { }

  ngOnInit(): void {
  }

}
