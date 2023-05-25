import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuponesService {
  
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  obtenerCupones(): Observable<string[]> {
    return this.http.get<string[]>(this.api + '/cupones');
  }

}
