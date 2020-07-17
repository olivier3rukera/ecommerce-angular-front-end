import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { WebsocketService } from "./websocket.service";
import { map } from 'rxjs/operators'
import { UserService } from './user.service';
import {environment} from  '@environments/environment'

const CHAT_URL = environment.websocketUrl + '/chat'


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public messages: Subject<any>;

  constructor(private wsService: WebsocketService, private userService: UserService) {
  }

  public connect(uuid) {
    let uuidUser = this.userService.uuid;
    let url = `${CHAT_URL}/${uuid}/${uuidUser}/`;
    console.log(url);
    this.messages = <Subject<any>>this.wsService.connect(url).pipe(
      map(
        (response: MessageEvent) => {
          let data = JSON.parse(response.data);
          console.log('Here are data', data)
          return {
            content: data['comment']['content'],
            author: data['comment']['author'],
            proposal: data['comment']['proposal'],
            sent_at: data['comment']['sent_at']
          };
        }
      )
    );

  }

}