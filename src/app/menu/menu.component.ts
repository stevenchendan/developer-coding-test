import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus: Array<Menu>;
  menuId: number;
  constructor(public router: Router) { }

  ngOnInit() {
    this.menus = [
      new Menu(1, 'Student Card', 'studentcard'),
      new Menu(2, 'Student Table', 'studenttable')
    ];
  }

  navigate(menu: Menu) {
    this.router.navigateByUrl(menu.link);
    this.menuId = menu.id;
  }
}

export class Menu {
  constructor(
    public id: number,
    public name: string,
    public link: string
  ) {

  }
}
