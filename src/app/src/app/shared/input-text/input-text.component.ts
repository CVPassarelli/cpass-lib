import { Component, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor {
  inputValue: string = '';
  controller = new FormControl('');

  onChange = (inputValue: string | null) => {};
  onTouched = () => {};

  touched = false;
  disabled = false;

  writeValue(value: string): void {
    this.controller.setValue(value, { emitEvent: false });
  }

  public registerOnChange(onChangeFunction: (value: any) => void) {
    this.onChange = onChangeFunction;
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  public changeValue() {
    const { value } = this.controller;
    this.onChange(value);
  }
}
