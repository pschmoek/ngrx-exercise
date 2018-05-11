import { Component } from '@angular/core';
import { AppState } from './root.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
