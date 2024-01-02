import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpyService {

  baseUrl="http://localhost:8080/";
  constructor(private http:HttpClient) { }


  getAllSpy():Observable<any>
  {
    return this.http.get(this.baseUrl+'spy/getAllSpy');
  }

  addSpy(obj:any): Observable<any>
  {
    const headers= { 'content-type' : 'application/json'};
    const body = JSON.stringify(obj);

    return this.http.post(this.baseUrl+'spy/add', body,{'headers':headers});
  }

  deleteSpy(id:any):Observable<any>
  {
    return this.http.delete(this.baseUrl+'spy/'+id);
  } 

  updateSpy(obj:any, id:any):Observable<any>
  {
    const headers={'content-type':'application/json'};
    const body=JSON.stringify(obj);
    return this.http.patch(this.baseUrl+'spy/'+id,body,{'headers':headers});
  }

  viewSpy(id: any):Observable<any>
  {
    return this. http.get(this.baseUrl +"spy"+id);
  }
}
