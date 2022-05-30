import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ClientComponent } from './client/client.component';

export class WebSocketClient
{
     [x: string]: any;
    webSocketEndPoint: string = 'http://localhost:8083/ws';
    topic: string = "/topic/greetings";
    stompClient: any;
    message?:any;
    clientappComponent:ClientComponent;
    constructor(clientComponent: ClientComponent){
      this.clientappComponent = clientComponent;
  }

  //connection au web socket 
  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({}, function (frame:any) {
      _this['_send'](frame);
 _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
  _this['_send'](frame);
  _this['onMessageReceived'](sdkEvent);
   ;});
        _this.stompClient.reconnect_delay = 2000;
    },
    this['errorCallBack']);
};
//erreur lors de la connection
errorCallBack(error: string) {
  console.log("errorCallBack -> " + error)
  setTimeout(() => {
      this._connect();
  }, 5000);
}

//methide pour envoyer les messages
_send(message:any) {
  console.log("appel via socket");
  this.stompClient.send("/app/hello", {}, JSON.stringify(message));
}

//message de reception de message 
onMessageReceived(message:any) {
console.log("Message envoyer au server :: " + message);
  this.clientappComponent?.['handleMessage'](JSON.parse(message.body));
}

}
