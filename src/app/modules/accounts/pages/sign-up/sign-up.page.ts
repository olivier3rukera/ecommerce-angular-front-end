import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserService } from '@core/services/user.service';
import { Router } from '@angular/router';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider } from "angularx-social-login";
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.css']
})
export class SignUpComponent implements OnInit {

  generalInfoForm: FormGroup;
  loading = false;
  user: any;
  constructor(private formBuilder: FormBuilder, private snackBar: MatSnackBar, private authService: AuthService, private userService: UserService, private router: Router) {


    this.generalInfoForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      password: ['', [Validators.minLength(5), Validators.maxLength(5)]],
      username: ['', [Validators.required, Validators.maxLength(9), Validators.minLength(9)]]
    })
  }


  ngOnInit() {
  }

  submit(): any {
    if (!this.generalInfoForm.valid) {
      return;
    }
    else {
      this.loading = true;
      this.userService.createUser(this.generalInfoForm.value).subscribe(
        data => {
          this.updateUser(data); console.log(data); this.snackBar.open('Your account was created successfully', '',
            { duration: 3000 });
        },
        error => { this.loading = false, console.log(error.error) });
    }
  }


  updateUser(data): void {
    this.userService.updateUser(data);
    this.router.navigate(['']);
    this.loading = false;
  }

}