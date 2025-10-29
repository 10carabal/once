import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { NavService } from './navService';

@Component({
  selector: 'app-nav-bar',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
    private navService = inject(NavService);
    routes: Route[] = [];

    ngOnInit() {
        this.routes = this.getRoutes();
    }

    private getRoutes(): Route[] {
        return this.navService.getNavigationRoutes();
    }
}
