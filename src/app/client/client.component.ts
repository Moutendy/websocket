import { Component, OnInit } from '@angular/core';
import { ServerwebsocketService } from '../serverwebsocket.service';
import { WebSocketAPI } from '../WebSocketAPI';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  [x: string]: any;
  


 
  constructor() { }

  ngOnInit(): void {
this.notification();
  }

  notification()
  {

    this['serverwebSocket'].connect()
  }

    

}
