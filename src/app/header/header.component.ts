import { Component, ViewChild } from "@angular/core";
import { MatMenuTrigger } from '@angular/material/menu';
// import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  // @ViewChild('sidenav') sidenav!: MatSidenav;

  // toggleSidenav() {
  //   this.sidenav.toggle();
  // }

  // closeSidenav() {
  //   this.sidenav.close();
  // }

  // @ViewChild('menuTrigger1') menuTrigger1!: MatMenuTrigger;

  // isDropdownOpen: string | null = null;

  // openDropdown(menu: string) {
  //   this.isDropdownOpen = menu;
  // }

  // closeDropdown() {
  //   this.isDropdownOpen = null;
  // }

  isDropdownOpen = false;

  openDropdown() {
    this.isDropdownOpen = true;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
