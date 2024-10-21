import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormeService {
  //changer l'adresse pour le déploiement 10.8.26.1
  private apiParCouleur = 'http://localhost:9090/api/triForme/2';
  private apiParForme = 'http://localhost:9090/api/triForme/1';
  private apiParTaille = 'http://localhost:9090/api/triForme/3';
  private apiAjoutForme = 'http://10.8.26.1:9090/api/triForme'; 


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
  ajouterForme(compositionId: number, forme: any): Observable<any> {
    const url = `${this.apiAjoutForme}/${compositionId}/addForme`; 
    return this.http.post(url, forme);  
  }
}
