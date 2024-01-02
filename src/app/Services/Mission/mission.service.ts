import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionService {

  private baseUrl = 'http://localhost:8080/mission';

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<any> {
    return this.http.get(this.baseUrl+"/getAllMissions");
  }

  addMission(mission: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.baseUrl+"/add", JSON.stringify(mission), { headers });
  }

  deleteMission(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateMission(mission: any, id: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch(`${this.baseUrl}/${id}`, JSON.stringify(mission), { headers });
  }

  viewMission(id: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
