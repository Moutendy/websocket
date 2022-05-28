import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceMessageService {

  protected host:string="http://localhost:8083";

  urlpost:string="/envoimessage";

  urlget:string="/receptionmessage";

  update:string="/vu";

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

  liremessage(statut:any)
  {
    console.log("lu service")
    return this.http.patch(this.host +this.update,statut);
  }

}
