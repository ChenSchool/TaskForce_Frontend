// src/app/services/aircraft.service.ts
import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';
import { Aircraft }      from '../models/aircraft.model';

@Injectable({ providedIn: 'root' })
export class AircraftService {
  constructor(private http: HttpClient) { }

  private host = "http://localhost:5000/aircraft";

  getAll(): Observable<Aircraft[]> {
    return this.http.get<Aircraft[]>(this.host);
  }
  getById(id: number): Observable<Aircraft> {
    return this.http.get<Aircraft>(`${this.host}/${id}`);
  }
  create(a: Partial<Aircraft>): Observable<Aircraft> {
    return this.http.post<Aircraft>(this.host, a);
  }
  update(id: number, a: Partial<Aircraft>): Observable<Aircraft> {
    return this.http.put<Aircraft>(`${this.host}/${id}`, a);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/${id}`);
  }
}
