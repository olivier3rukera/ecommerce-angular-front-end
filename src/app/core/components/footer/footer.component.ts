import { Component, OnInit } from '@angular/core';
import { UserService } from '@core/services/user.service';
import { NotificationService } from '@core/services/notification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  username: string;
  constructor(private user: UserService, public notification : NotificationService) { }

  ngOnInit() {
    this.username = this.user.getUsername();
  }

}
