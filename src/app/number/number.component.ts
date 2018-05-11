import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root.reducer';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {
  numberValue$ = this.store.pipe(select(s => s.number.value));

  constructor(
    private store: Store<AppState>
  ) {}

  onIncrementClick() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  onDecrementClick() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  onResetClick() {
    this.store.dispatch({type: 'RESET'});
  }
}
