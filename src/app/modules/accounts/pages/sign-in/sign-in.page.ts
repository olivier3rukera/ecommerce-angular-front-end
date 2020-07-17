import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '@core/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { NotificationService } from '@core/services/notification.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loggedIn: boolean;
  loading: boolean = false;
  names;

  constructor(private formBuilder: FormBuilder,
    private notificationService: NotificationService, private userService: UserService, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]
        ],
        password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]]
      }
    )
  }

  ngOnInit() {
    this.loggedIn = this.userService.isLogged;
    if (this.loggedIn) {
      this.names = this.userService.names;
    }
  }

  submit() {
    this.loading = true;
    this.userService.login(this.loginForm.value).subscribe(
      data => {
        this.userService.updateUser(data);
        this.router.navigate(['']);
      }, error => this.loading = false
    )
  }
  
  logout() {
    this.userService.signOut();
    this.loggedIn = false;
  }
}