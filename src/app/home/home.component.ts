import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { NavBarComponent } from '../shared/components/nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent { }
