import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import sidebarContent from '../../utils/sidebar.json';

interface Sidebar {
  id: number;
  name: string;
  value: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  public sidebar = sidebarContent;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onClick(menu: Sidebar) {
    this.route.navigateByUrl(menu.path);
  }
}
