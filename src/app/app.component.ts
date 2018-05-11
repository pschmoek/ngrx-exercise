import { Component } from '@angular/core';
import { AppState } from './root.reducer';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Logout } from './auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoginPage$ = this.store.pipe(select(s => s.auth.username === null));
  showNumber$ = this.showLoginPage$.pipe(map(s => !s));
  canLogout$ = this.store.pipe(select(s => s.auth.username != null));
  currentUser$ = this.store.pipe(select(s => s.auth.username));

  constructor(
    private store: Store<AppState>
  ) {}

  onLogoutClick() {
    this.store.dispatch(new Logout());
  }
}
