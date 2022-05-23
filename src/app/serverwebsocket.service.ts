import { Injectable } from '@angular/core';
import * as Stomp from 'stompjs';


import * as SockJS from 'sockjs-client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerwebsocketService {
  webSocketEndPoint: string = 'http://localhost:8083/ws';
    topic: string = "/topic/greetings";
    stompClient: any;
  constructor() { }

  connect()
   {
     
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    const _this = this;
    _this.stompClient.connect({},  (frame:any) => {
        _this.stompClient.subscribe(_this.topic, 
            function(message: { body: string; }) {
                var quote = JSON.parse(message.body);
           
             
              });
        _this.stompClient.reconnect_delay = 2000;
    }, );
   }

}
