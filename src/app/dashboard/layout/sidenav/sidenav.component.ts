import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { LayoutService } from '../../services/layout.service';

interface MenuItem {
  name: string;
  icon: string;
  children?: MenuItem[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menus: MenuItem[] = [
    {
      name: 'Home',
      icon: 'home',
    },
    {
      name: 'Settings',
      icon: 'settings',
      children: [
        {
          name: 'Manage Account',
          icon: 'manage_accounts',
          children: [
            {
              name: 'Security',
              icon: 'security',
              children: [{ name: 'General', icon: '' }],
            },
          ],
        },
      ],
    },
  ];

  treeControl = new FlatTreeControl<FlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  _transformer = (node: MenuItem, level: number) => ({
    expandable: !!node.children && node.children.length > 0,
    name: node.name,
    icon: node.icon,
    level,
  });

  // eslint-disable-next-line @typescript-eslint/member-ordering
  treeFlattener = new MatTreeFlattener(
    // eslint-disable-next-line no-underscore-dangle
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  // eslint-disable-next-line @typescript-eslint/member-ordering
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(public layoutService: LayoutService) {
    this.dataSource.data = this.menus;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  ngOnInit(): void {}
}
