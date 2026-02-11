import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl="https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getusers()
  {
    return this.http.get(this.baseUrl);
  }
  getuserById(id:number)
  {
    return this.http.get(this.baseUrl+"/"+id);
  }

  adduser(data:any)
  {
    return this.http.post(this.baseUrl,data);
  }
}
