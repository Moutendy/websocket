import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ServiceMessageService } from '../service-message.service';

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
  message?:string;
  name?: string;
  nbr?:number;
  list?:any[];


  constructor(protected serviceMessageService:ServiceMessageService) { }

  ngOnInit(): void {
    this.webSocketClient = new WebSocketClient(this);
    //tableau vide
    this.messages = [];
this.connection();


  }

  connection()
{
  
  this.webSocketClient?._connect()

}
getListMsgs()
{
  console.log("bonjour");
}
sendMessage(){
  this.webSocketClient?._send(this.name);
    }
  handleMessage(message:any){
  //  console.log(message);
    // // ajouter une liste de notification
    // this.greeting = message.name;
    this.messages?.push(message.name);
    this.nbr=message.length;
  }


  getListMsg(){
    this.list = [];
    console.log("lu");
    this.serviceMessageService.liremessage("lu").pipe(take(1)).subscribe();
  }


}


