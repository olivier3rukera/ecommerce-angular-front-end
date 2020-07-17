import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { NotificationService } from '@core/services/notification.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public user: UserService, public notification: NotificationService) { }

  ngOnInit() {
  }

}
