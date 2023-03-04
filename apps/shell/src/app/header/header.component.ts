import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'tvp-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router) {}
}
