import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { AppComponent } from './app.component';

export class WebSocketAPI {
    [x: string]: any;
    webSocketEndPoint: string = 'http://localhost:8083/ws';
    topic: string = "/topic/greetings";
    stompClient: any;
    appComponent: AppComponent;
    connexion:any;

    constructor(appComponent: AppComponent){
      this.appComponent = appComponent;
  }

    _connect() {
        console.log("Initialize WebSocket Connection");
        let ws = new SockJS(this.webSocketEndPoint);
        this.stompClient = Stomp.over(ws);
        const _this = this;
        _this.stompClient.connect({}, function (frame:any) {
     _this.stompClient.subscribe(_this.topic, function (sdkEvent: any) {
        _this.connexion= _this['onMessageReceived'](sdkEvent);});
            //_this.stompClient.reconnect_delay = 2000;
        },

        this['errorCallBack']);


    };

    _disconnect() {
        if (this.stompClient !== null) {
            this.stompClient.disconnect();
        }
        console.log("Disconnected");
    }


    errorCallBack(error: string) {
        console.log("errorCallBack -> " + error)
        setTimeout(() => {
            this._connect();
        }, 5000);
    }


      _send(message:any) {
        console.log("appel via socket");
        this.stompClient.send("/app/notificationdemande", {}, JSON.stringify(message));
    }

    onMessageReceived(message:any) {
        //console.log("Message envoyer au server :: " + message);

        this.appComponent.handleMessage(JSON.parse(message.body));

    }
}
