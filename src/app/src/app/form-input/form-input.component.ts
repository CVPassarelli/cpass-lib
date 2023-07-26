import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  standalone: true,
})
export class FormInputComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teste() {
    alert('hello world');
  }
}
