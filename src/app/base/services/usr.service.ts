import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsrService {

  apiurl="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  getusers()
  {
    return this.http.get(this.apiurl);
  }
}
