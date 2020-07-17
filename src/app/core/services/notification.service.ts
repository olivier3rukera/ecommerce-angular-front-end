import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Router, NavigationCancel, NavigationEnd, NavigationStart, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  get loading() {
    return this._loading;
  }
  private _loading = false;
  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.router.events.pipe(
      filter(
        event =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError,
      ),
    ).subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this._loading = true;
        }
        else {
          this._loading = false;
        }
      }
    )
  }
  display(message: string) {
    this.snackBar.open(message, '', { duration: 3000 });
  }

  enableLoading() {
    this._loading = true;
  }

  disableLoading() {
    this._loading = false;
  }
}
