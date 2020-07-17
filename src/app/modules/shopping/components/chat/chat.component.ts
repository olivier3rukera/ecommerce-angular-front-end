import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ProductsService } from '@core/services/products.service';
import { ChatService } from '@core/services/chat.service';
import { UserService } from '@core/services/user.service';
import { NotificationService } from '@core/services/notification.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  thread;
  commentForm: FormGroup;
  comments: any = [];
  private message = {
    author: "tutorialedge",
    message: "this is a test message"
  };

  constructor(private chatService: ChatService, public userService: UserService, private route: ActivatedRoute,
    private formBuilder: FormBuilder, private productsService: ProductsService, public notification: NotificationService) {

  }

  ngOnInit() {
    this.thread = this.route.snapshot.paramMap.get('uuid');

    this.commentForm = this.formBuilder.group({
      'content': ['', Validators.required],
      'proposal': [this.thread]
    });
    this.notification.enableLoading();
    

    this.chatService.connect(this.thread);

    this.chatService.messages.subscribe(msg => {
      this.comments.push(msg);
    });
  }

  sendComment() {
    this.chatService.messages.next(this.commentForm.value);
    this.commentForm.get('content').setValue('');
  }

}
