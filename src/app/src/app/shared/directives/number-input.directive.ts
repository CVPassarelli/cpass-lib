import { Directive, HostListener } from '@angular/core';
import { removeNaN } from '../utils/utils';

@Directive({
  selector: '[number]',
  standalone: true,
})
export class NumberInputDirective {
  constructor() {}

  @HostListener('input', ['$event', '$event.target.value'])
  onInput(ipt: any, amount: any) {
    console.log(ipt, amount);
    ipt = Number(removeNaN(amount)) / 100;
  }
}
