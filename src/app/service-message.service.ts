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


}
