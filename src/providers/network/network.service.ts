import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  baseUrl = environment.base;

  constructor(
    private http: HttpClient
  ) {}
  
  public get(url: string){
    return this.http.get(this.baseUrl + url).toPromise();
  }
  public post(url: string, payload: Object){
    return this.http.post(this.baseUrl + url, payload).toPromise();
  }
  public patch(url: string, payload: Object){
    return this.http.patch(this.baseUrl + url, payload).toPromise();
  }
  public put(url: string, payload: Object){
    return this.http.put(this.baseUrl + url, payload).toPromise();
  }
  public delete(url: string, payload: Object){
    return this.http.delete(this.baseUrl + url, payload).toPromise();
  }
}
