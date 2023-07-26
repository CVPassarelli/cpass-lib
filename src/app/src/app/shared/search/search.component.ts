import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

export type TKeyVal = {
  label: string;
  value: string;
};

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class SearchComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  private cd = inject(ChangeDetectorRef);
  selectedItens: Array<any> = [];
  itemList: TKeyVal[] = [
    {
      label: 'Item 1',
      value: '1',
    },
    {
      label: 'Item 2',
      value: '2',
    },
    {
      label: 'Item 3',
      value: '3',
    },
    {
      label: 'Item 4',
      value: '4',
    },
    {
      label: 'Item 5',
      value: '5',
    },
    {
      label: 'Item 6',
      value: '6',
    },
    {
      label: 'Item 7',
      value: '7',
    },
    {
      label: 'Item 8',
      value: '8',
    },
    {
      label: 'Item 9',
      value: '9',
    },
    {
      label: 'Item 31',
      value: '31',
    },
  ];
  itensToList: TKeyVal[] = [];

  form = this.fb.group({
    search: [''],
  });

  show: boolean = false;

  constructor(private fb: FormBuilder, private _eref: ElementRef) {}

  ngOnInit(): void {
    this.itensToList = this.itemList;

    const sub = this.form.get('search')?.valueChanges.subscribe((value) => {
      const filteredValues = this.itemList.filter((itemToFIlter) =>
        itemToFIlter.value.includes(value ?? '')
      );
      if (value) {
        this.itensToList = filteredValues;
      } else {
        this.itensToList = this.itemList;
      }
    });
    this.sub.add(sub);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target))
      // or some similar check
      this.show = false;
  }

  selectItem(item: TKeyVal) {
    console.log(item);
    const index = this.selectedItens.findIndex((itemSelecteds) => {
      return itemSelecteds.value === item.value;
    });
    if (index >= 0) {
      const filtered = this.selectedItens.filter(
        (selItem) => selItem.value !== item.value
      );
      this.selectedItens = filtered;
    } else {
      this.selectedItens = [...this.selectedItens, item];
    }
    this.cd.markForCheck();
  }
}
