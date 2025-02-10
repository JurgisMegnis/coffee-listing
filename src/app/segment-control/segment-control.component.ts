import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SegmentControl } from '../segment-control';

@Component({
  selector: 'app-segment-control',
  standalone: true,
  imports: [],
  template: `
      <input type="radio" class="product-filter" id="product-filter-{{segmentControl.id}}" name="product-filter" [value]="segmentControl.name" [checked]="segmentControl.checked" (change)="onInputChange(segmentControl.name)">
      <label for="product-filter-{{segmentControl.id}}">{{segmentControl.name}}</label>
  `,
  styleUrl: './segment-control.component.scss'
})
export class SegmentControlComponent {
  @Input() segmentControl!: SegmentControl;
  @Output() selectionChange = new EventEmitter<string>();

  onInputChange(value: string) {
    this.selectionChange.emit(value);
  }
  
}
