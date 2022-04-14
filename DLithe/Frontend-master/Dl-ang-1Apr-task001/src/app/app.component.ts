import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bakery';
  sel_pastry:any;
  getDetails(pastry_details:any){
    //console.log(pastry_details);
    this.sel_pastry=pastry_details;
  }
}
