import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:9090/api/triForme/1'; //collection forme


  constructor(private http: HttpClient) { }

 // Fonction pour récupérer les formes
  getFormes(): Observable<any> {
  return this.http.get<any>(this.apiUrl);
}
}
