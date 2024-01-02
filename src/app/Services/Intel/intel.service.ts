import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntelService {

  baseUrl="http://localhost:8080/";
  constructor(private http:HttpClient) { }


  getAllIntel():Observable<any>
  {
    return this.http.get(this.baseUrl+'intel/getAllIntel');
  }

  addIntel(obj:any): Observable<any>
  {
    const headers= { 'content-type' : 'application/json'};
    const body = JSON.stringify(obj);

    return this.http.post(this.baseUrl+'intel/add', body,{'headers':headers});
  }

  viewIntel(id: any):Observable<any>
  {
    return this. http.get(this.baseUrl +"intel"+id);
  }
}
