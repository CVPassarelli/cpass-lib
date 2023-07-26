import { Component, OnInit } from '@angular/core';
import { NumberInputDirective } from '../directives/number-input.directive';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  imports: [NumberInputDirective],
  standalone: true,
})
export class InputNumberComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
