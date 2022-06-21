import { Component, OnInit } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from 'src/environments/environment';
import { WebsocketService } from '../websocket.service';




@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {


  greeting: any;
  messages?: string[];
  message?:string;
  name?: string;
  nbr?:number;
  list?:any[];

  notification: any;
  private stompClient:any;

  readonly WsURL: string = environment.WsURL;

  constructor(private notificationservice:WebsocketService) { }

  ngOnInit() {
    this.connect();
  }


  connect()
  {
    const socket = new SockJS(this.WsURL);
    this.stompClient = Stomp.over(socket);

    this.stompClient.debug = () => { };

    const _this = this;

    this.stompClient.connect({}, function (frame:any) {
      _this.setConnected(true);
      _this.stompClient.subscribe('/topic/notifUser', function (msg: any) {
        _this.notification = msg.body;
      });
    });


  }

  setConnected(connected: boolean) {
    if (connected) {
      this.notification = 0;
    }
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
  }

  notificationlire()
  {
this.notificationservice.writenotification().pipe().subscribe({

});
  }

  _send(message:any) {
            console.log("appel via socket");
            this.stompClient.send("/topic/notifUser", {}, JSON.stringify(message));
        }
}


