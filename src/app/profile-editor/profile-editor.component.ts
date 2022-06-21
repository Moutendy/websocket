import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {

  comments: { name: string;chec: string; lastname: string; }[]=[];

  comment={lastName:'',firstName:''};

  profileForm!: FormGroup;

  info={ nom:"Mohamed",
  email:"med@youssfi.net",
  tel:"0661326837"
  };

  notification:any;
  private stompClient:any;

  readonly WsURL: string = environment.WsURL;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.connect();


    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      chec: ['', Validators.required],
    });

  }
  onSubmit(name:string)
  {
console.log(this.profileForm.value.chec);
this.comment.firstName=this.profileForm.value.firstName;
this.comment.lastName=this.profileForm.value.lastName;
this.comments.push({name: this.comment.firstName,chec: this.info.nom,lastname:this.comment.lastName});
console.log(this.comments);
console.log(this.info.nom);
this.profileForm.reset();
  }
  connect()
  {

    const socket = new SockJS(this.WsURL);
    this.stompClient = Stomp.over(socket);

    this.stompClient.debug = () => { };

    const _this = this;

    this.stompClient.connect({}, function (frame:any) {

      // _this.setConnected(true);
      _this._send(frame);
      _this.stompClient.subscribe('/topic/greetings', function (msg: any) {
        _this._send(frame);
      _this.notification=JSON.parse(msg.body);
console.log(_this.notification);

      });

    });
  }
  setConnected(connected: boolean) {
    if (connected) {


    }
  }

  _send(message:any) {
    console.log("calling logout api via web socket");
    this.stompClient.send("/app/hello", {}, JSON.stringify(message));
}

}


