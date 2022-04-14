import { Component,EventEmitter,Output, OnInit } from '@angular/core';
import { Collegue } from '../collegues';
import { cl } from 'src/collegues_mock';

@Component({
  selector: 'app-collegues',
  templateUrl: './collegues.component.html',
  styleUrls: ['./collegues.component.css']
})
export class ColleguesComponent implements OnInit {
  col_prop = cl;
  @Output() passDetailDatatoApp=new EventEmitter<any>();
  constructor() { 

  }

  ngOnInit(): void {}
  
    onColClicked(col_details :any){
      //console.log(col_details);
      this.passDetailDatatoApp.emit(col_details)
    
  }

}
