import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl + '/gigs/categories/');
  }
}
