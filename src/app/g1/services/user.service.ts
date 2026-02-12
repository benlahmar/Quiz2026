import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl="https://jsonplaceholder.typicode.com/users";
  constructor(private http:HttpClient) { }

  hello()
  {
    return "hello";
  }

  getusers()
  {
   return  this.http.get(this.BaseUrl);
    
  }

  getuserById(id:number)
  {
    return this.http.get(this.BaseUrl+"/"+id);
  }
  adduser(data:any)
  {
    return this.http.post(this.BaseUrl,data);
  }
  deleteuser(id:number)
  {
    return this.http.delete(this.BaseUrl+"/"+id);
  }
}
