import { Component, OnInit } from '@angular/core';
import { pastries } from '../pastry_mock';

@Component({
  selector: 'app-pastry-list',
  templateUrl: './pastry-list.component.html',
  styleUrls: ['./pastry-list.component.css']
})
export class PastryListComponent implements OnInit {
li=pastries;
  constructor() { }

  ngOnInit(): void {
  }

}
