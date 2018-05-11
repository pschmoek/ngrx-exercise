import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { AppState } from '../root.reducer';
import { Login } from './auth.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {
  loginForm = this.formBuilder.group({
    user: ['', Validators.required],
    password: ['', Validators.required]
  });
  private authSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
    this.authSubscription = this.store.pipe(select(s => s.auth)).subscribe(auth => {
      this.loginForm.patchValue({
        user: auth.username,
        password: auth.password
      });
    });
  }

  onFormSubmit(currentValue: {user: string, password: string}) {
    if (this.loginForm.valid) {
      this.store.dispatch(new Login({user: {username: currentValue.user, password: currentValue.password}}));
    }
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
