import { Component, OnInit } from '@angular/core';
import { WebSocketAPI } from '../WebSocketAPI';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{

  
  webSocketAPI?: WebSocketAPI;
  greeting: any;
  messages?: string[];
  name?: string;
  constructor() { }

  ngOnInit(): void {
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
    console.log(message);
    // ajouter une liste de notification
    this.greeting = message.name;
    this.messages?.push(message.name);
  }
}
