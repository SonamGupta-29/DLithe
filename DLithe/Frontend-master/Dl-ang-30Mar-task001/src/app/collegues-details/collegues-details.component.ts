import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegues-details',
  templateUrl: './collegues-details.component.html',
  styleUrls: ['./collegues-details.component.css']
})
export class ColleguesDetailsComponent implements OnInit {
  @Input() selected_col:any;
  constructor() { }

  ngOnInit(): void {
  }

}
