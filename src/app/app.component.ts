import { Component } from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';
import { WebSocketAPI } from './WebSocketAPI';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-springboot-websocket';

  webSocketAPI?: WebSocketAPI;
  greeting: any;
  messages?: string[];
  name?: string;

  ngOnInit() {
    this.webSocketAPI = new WebSocketAPI(this);
    //tableau vide
    this.messages = [];
  }

  connect(){
    this.webSocketAPI?._connect();
  }

  disconnect(){
this.webSocketAPI?._disconnect();
  }

  sendMessage(){
this.webSocketAPI?._send(this.name);
  }

  handleMessage(message:any){
    console.log(message.name);
    // ajouter une liste de notification
    this.greeting = message.name;
    this.messages?.push(message.name);
  }
   
}
