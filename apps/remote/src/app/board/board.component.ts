import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'tvp-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  date = new Date().toLocaleDateString();
}
