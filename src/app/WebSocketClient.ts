import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ClientComponent } from './client/client.component';

export class WebSocketClient
{
     [x: string]: any;
    webSocketEndPoint: string = 'http://localhost:8083/ws';
    topic: string = "/topic/greetings";
    stompClient: any;
    clientappComponent:ClientComponent;
    constructor(clientComponent: ClientComponent){
      this.clientappComponent = clientComponent;
  }


  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame:any) {
 _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
   _this['onMessageReceived'](sdkEvent);});
        //_this.stompClient.reconnect_delay = 2000;
    },

    this['errorCallBack']);


};


onMessageReceived(message:any) {
  //console.log("Message envoyer au server :: " + message);

console.log("Message envoyer au server :: " + message);
  this.clientappComponent?.['handleMessage'](JSON.parse(message.body));



}

}
