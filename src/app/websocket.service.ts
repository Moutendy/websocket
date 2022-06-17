import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  readonly Backe: string = environment.BackendURL;
  constructor(private http:HttpClient) { }

  writenotification(): Observable<any>
  {
return this.http.get(this.Backe+'/lire')
  }
}
