import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormeService {
  private apiParCouleur = 'http://localhost:9090/api/triForme/2';
  private apiParForme = 'http://localhost:9090/api/triForme/1';
  private apiParTaille = 'http://localhost:9090/api/triForme/3';


  constructor(private http: HttpClient) {}

  getFormes(): Observable<any> {
    return this.http.get<any>(this.apiParCouleur);
  }
  getFormes2(): Observable<any> {
    return this.http.get<any>(this.apiParForme);
  }
  getFormes3(): Observable<any> {
    return this.http.get<any>(this.apiParTaille);
  }
}
