import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '@environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = environment.baseUrl;
  get userLogged() {
    return this.isLogged;
  }
  get names() {
    if (this.user && this.user.first_name)
      return this.user.first_name + ' ' + this.user.last_name;
    else
      return '';
  }

  get username() {
    return (this.user && this.user.username) || '';
  }
  public user = {
    'username': '',
    'first_name': '',
    'last_name': '',
    'token': '',
    'uuid': ''
  };

  get uuid() {
    return (this.user && this.user.uuid) || '00000000-0000-0000-0000-000000000000';
    //return '00000000-0000-0000-0000-000000000000';
  }
  isLogged = false;

  constructor(private http: HttpClient) {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log('is logged in');
      this.isLogged = true;
      console.log(this.user);
    }
    else {
      this.isLogged = false;
      console.log('not logged');
    }
  }

  login(user): any {
    user['username'] = '+243' + user['username']
    return this.http.post(`${this.url}/accounts/sign/in/`, user);
  }



  updateUser(data) {
    if (!this.isLogged) {
      this.user.username = data.username;
      this.user.token = data.token;
      this.user.uuid = data.uuid;
      this.user.first_name = data.first_name;
      this.user.last_name = data.last_name;
      this.isLogged = true;
      localStorage.setItem('user', JSON.stringify(this.user));
    }
  }

  signOut() {
    localStorage.removeItem('user');
    this.isLogged = false;
  }

  getUsername() {
    return this.user.username;
  }


  createUser(general): any {
    general['username'] = "+243" + general['username']
    console.log('******************************************',general)
    return this.http.post(`${this.url}/accounts/sign/up/`, general);

  }


  getHttpHeaders(): any {
    const httpOptions = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    );
    return httpOptions;
  }
  getAuthHeaders(): any {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': `Token ${this.user.token}`
        }
      )
    };

    return httpOptions;
  }

  getAuthHeadersFormData(): any {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': `Token ${this.user.token}`
        }
      )
    };
    return httpOptions;
  }
}