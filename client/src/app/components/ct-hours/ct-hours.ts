import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ct-hours',
  imports: [CommonModule],
  templateUrl: './ct-hours.html',
  styleUrl: './ct-hours.css'
})
export class CtHours {
  @Input() label = 'T500';
  @Input() current = 0;
  @Input() target = 300;

  get pct() {
    return Math.min(100, Math.round((this.current / (this.target || 1)) * 100));
  }

}
