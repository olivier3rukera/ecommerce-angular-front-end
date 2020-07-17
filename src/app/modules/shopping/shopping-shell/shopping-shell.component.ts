import { Component, OnInit } from '@angular/core';
import {UserService} from '@core/services/user.service';
import {NotificationService} from '@core/services/notification.service'
@Component({
  selector: 'app-offers-shell',
  templateUrl: './shopping-shell.component.html',
  styleUrls: ['./shopping-shell.component.css']
})
export class ShoppingShellComponent implements OnInit {

  constructor(public user: UserService, public notification: NotificationService) { }

  ngOnInit() {
  }

}
