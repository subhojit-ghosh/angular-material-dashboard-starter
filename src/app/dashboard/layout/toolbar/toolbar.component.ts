import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() drawer!: MatDrawer;

  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}

  toggleDrawer(): void {
    this.drawer.toggle();
  }

  toggleExpanded(value: boolean): void {
    this.layoutService.isMenuExpanded$.next(value);
  }
}
