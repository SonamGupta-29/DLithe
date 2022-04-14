import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-selected-menu',
  templateUrl: './selected-menu.component.html',
  styleUrls: ['./selected-menu.component.css']
})
export class SelectedMenuComponent implements OnInit {
  SelectMenu:any=[]

  constructor(private menuService:MenuService) { }

  ngOnInit(): void {
   this.SelectData();
                     
  }
  SelectData(){
    this.SelectMenu=this.menuService.menu;
  }

}
