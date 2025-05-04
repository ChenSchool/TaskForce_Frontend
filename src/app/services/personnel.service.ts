// src/app/services/aircraft.service.ts
import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';
import { Personnel }     from '../models/personnel.model';

@Injectable({ providedIn: 'root' })
export class PersonnelService {
  private host = "http://localhost:5000/personnel";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Personnel[]> {
    return this.http.get<Personnel[]>(this.host);
  }
  getById(id: number): Observable<Personnel> {
    return this.http.get<Personnel>(`${this.host}/${id}`);
  }
  create(a: Partial<Personnel>): Observable<Personnel> {
    return this.http.post<Personnel>(this.host, a);
  }
  update(id: number, a: Partial<Personnel>): Observable<Personnel> {
    return this.http.put<Personnel>(`${this.host}/${id}`, a);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/${id}`);
  }
}

