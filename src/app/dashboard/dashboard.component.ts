import { Component, OnInit } from '@angular/core';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}

  ngOnInit(): void {}
}
