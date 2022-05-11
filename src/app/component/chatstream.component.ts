import {Component}            from '@angular/core';
import {Message}              from '../data/message';
import {AppDataService}       from '../service/appdata.service';
import {WebSocketService}     from '../service/websocket.service';
import { UserForumService } from '../user-forum.service';

@Component({
  selector: 'chat-stream',
  templateUrl: '../template/chatstream.component.html',
  styleUrls: ['../style/chatstream.component.css']
})
export class ChatStreamComponent {

  message: string = ''; 
  publishedMessage: Message[] = new Array();
  showTypingIndicator: boolean = false;
  typingUser: string;
  loggedinUserId: number;
  websocket: WebSocket;

  constructor(private appDataService: AppDataService,
              private websocketService: WebSocketService,
              private service:UserForumService) {
    this.websocket = this.websocketService.createNew();
    this.loggedinUserId = this.appDataService.userId;
    this.startListening();
    this.service.addMessage(this.message);
    
  }

  startListening() {
     
    this.websocket.onmessage = (event: MessageEvent) => {
      let message: Message = JSON.parse(event.data);
      console.log(message);
      

      if (message.type == 'MESSAGE') {
        this.publishedMessage.push(message);
        console.log(this.publishedMessage);
        
      } else if (message.type == 'TYPING') {
        if (message.sender != this.loggedinUserId) {
          this.showUserTypingIndicator(message.fromUserName);
        }
      }
    };
  }

  sendMessage() {
    let msg = this.message;
    if (msg == '' || msg == undefined) return;

    let message: Message = {
      type: 'MESSAGE',
      sender: this.appDataService.userId,
      fromUserName: this.appDataService.userName,
      date: new Date(),
      message: msg
    }
    this.websocket.send(JSON.stringify(message));
    this.service.addMessage(JSON.stringify(message));
    this.message = '';
  }

  sendTypeIndicator() {
    let message: Message = {
      type: 'TYPING',
      sender: this.appDataService.userId,
      fromUserName: this.appDataService.userName,
      date:null,
      message: null
    }
    this.websocket.send(JSON.stringify(message));
  }
  showUserTypingIndicator(userName: string) {
    this.typingUser = userName;
    this.showTypingIndicator = true;
    setTimeout(() => {
      this.hideUserTypingIndicator();
    }, 1000);
  }
  hideUserTypingIndicator() {
    if (this.showTypingIndicator) {
      this.showTypingIndicator = false;
    }
  }

}