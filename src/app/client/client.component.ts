import { Component, OnInit } from '@angular/core';
import { ServerwebsocketService } from '../serverwebsocket.service';
import { WebSocketAPI } from '../WebSocketAPI';
import { WebSocketClient } from '../WebSocketClient';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  [x: string]: any;
  webSocketClient?: WebSocketClient;
  greeting: any;
  messages?: string[];
  name?: string;
  nbr?:number;
  list?:any[];


  constructor() { }

  ngOnInit(): void {
    this.webSocketClient = new WebSocketClient(this);
    //tableau vide
    this.messages = [];
this.connection();

this.getListMsg();
  }

  connection()
{
  this.webSocketClient?._connect();

}
  handleMessage(message:any){
    // console.log(message.name);
    // // ajouter une liste de notification
    // this.greeting = message.name;
    // this.messages?.push(message.name);
    // this.nbr=this.messages?.length;
    this.getListMsg();
  }


  getListMsg(){
    this.list = [];
  }


}


