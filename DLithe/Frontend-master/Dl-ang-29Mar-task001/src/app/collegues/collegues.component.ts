import { Component, OnInit } from '@angular/core';
import { Collegues } from '../collegues';
import { COLLEGUES } from 'src/collegues.mock';
@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {
  collegues= COLLEGUES;

  constructor() { }

  ngOnInit(): void {
  }

}
