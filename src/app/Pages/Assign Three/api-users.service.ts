import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  URL_Users_All = "https://school-8c45d.firebaseio.com/users.json"
  URL_Users_BY_ID = "https://school-8c45d.firebaseio.com/users"
  URL_User_CREATE = "https://school-8c45d.firebaseio.com/users.json"
  URL_User_UPDATE = "https://school-8c45d.firebaseio.com/users"
  URL_Users_DELETE = "https://school-8c45d.firebaseio.com/users"


  
  constructor(private http:HttpClient) { }



   getUsers(): Observable<any> {
    return this.http.get(this.URL_Users_All);
  }
   getUserById(index:number): Observable<any> {
    return this.http.get(this.URL_Users_BY_ID + '/' +index+".json");
  }
  createUsers(value:string) {
    console.log(value);
    
    return this.http.post(this.URL_Users_All,value);
  }
  upDateUser(index:number ,value:string): Observable<any> {
    return this.http.put(this.URL_User_UPDATE + '/' +index+".json" , value);
  }
  deleteUser(index:number){
    return this.http.delete(this.URL_Users_DELETE + '/' +index+".json");

  }
}
