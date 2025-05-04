// src/app/services/Assignment.service.ts
import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';
import { Assignment } from '../models/assignment.model';
@Injectable({ providedIn: 'root' })
export class AssignmentService {
  private host = "http://localhost:5000/assignments";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.host);
  }
  getById(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.host}/${id}`);
  }
  create(a: Partial<Assignment>): Observable<Assignment> {
    return this.http.post<Assignment>(this.host, a);
  }
  update(id: number, a: Partial<Assignment>): Observable<Assignment> {
    return this.http.put<Assignment>(`${this.host}/${id}`, a);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/${id}`);
  }
}
