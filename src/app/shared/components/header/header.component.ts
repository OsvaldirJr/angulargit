
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavService, Menu } from '../../services/nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() subscribers: any;
  public menuItems: Menu[];
  public items: Menu[];
  public openNav: boolean = false
  public right_sidebar: boolean = false
  public text: string

  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, private router: Router) { }

  ngOnInit() {
    this.setMenuItems()
  }

  setMenuItems() {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
          })
        }
      })
    })
  }

  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      menuItem.active = menuItem == item
    })
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  getMenuIcon(menuItem) {
    return 'assets/images/icons/' + menuItem.icon + '.svg'
  }

}
