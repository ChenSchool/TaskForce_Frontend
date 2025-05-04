// src/app/services/Task.service.ts
import { Injectable }    from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable }    from 'rxjs';
import { Task } from '../models/task.model';
@Injectable({ providedIn: 'root' })
export class TaskService {
  private host = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.host      );
  }
  getById(id: number): Observable<Task> {
    return this.http.get<Task>(`${this.host}/${id}`);
  }
  create(a: Partial<Task>): Observable<Task> {
    return this.http.post<Task>(this.host, a);
  }
  update(id: number, a: Partial<Task>): Observable<Task> {
    return this.http.put<Task>(`${this.host}/${id}`, a);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.host}/${id}`);
  }
}
