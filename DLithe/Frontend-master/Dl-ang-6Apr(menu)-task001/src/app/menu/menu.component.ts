import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../menu.mock';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
item=Menu;
selectedItem:any=[];
  constructor( private menuservice:MenuService, private router:Router) { }

  ngOnInit(): void {
  }
  Onclick(e:any,items:any){
    // console.log(e.target.value)
    console.log(items)
    this.selectedItem.push(items)
  }
  GetData(){
    this.menuservice.menu=this.selectedItem;
    this.router.navigate(['selected-menu'])
    console.log(this.menuservice.menu)
  }

}
