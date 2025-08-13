import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-kpi-tile',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './kpi-tile.html',
  styleUrl: './kpi-tile.css'
})
export class KpiTile {
  @Input() icon!: IconDefinition;
  @Input() value: number | string = '-';
  @Input() label = '';
  @Input() danger = false;
}
