import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private http: HttpClient, userService : UserService) { }
}
