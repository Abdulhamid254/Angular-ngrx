import { Component } from '@angular/core';
import { HeaderComponent } from '../../core/features/header/header.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {



}
