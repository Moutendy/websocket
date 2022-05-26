import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMessageService {

  protected host:string="http://localhost:8083";

  urlpost:string="/envoimessage";

  urlget:string="/receptionmessage";

  constructor(protected http:HttpClient) { }

  message(Message: any)
  {
    console.log("les message à envoyer :"+Message);
    return this.http.post(this.host+this.urlpost,Message);
  }

  receptionmessag()
  {
    return this.http.get(this.host+this.urlget);
  }


}
