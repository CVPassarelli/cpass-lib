import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { FormInputComponent } from '../form-input/form-input.component';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextComponent } from '../shared/input-text/input-text.component';
import { InputNumberComponent } from '../shared/input-number/input-number.component';
import { SearchComponent } from '../shared/search/search.component';

@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    InputTextComponent,
    InputNumberComponent,
    SearchComponent,
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWrapperComponent extends FormInputComponent implements OnInit {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    nome: [
      { value: 'Caio', disabled: true },
      [Validators.required, Validators.minLength(3)],
    ],
  });

  constructor() {
    super();
  }

  override ngOnInit(): void {}

  submit() {
    console.log(this.form);
  }
}
