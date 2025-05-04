// src/app/list-Task/list-Task.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule }            from '@angular/router';
import { Task } from '../models/task.model';
import { TaskService }   from '../services/task.service';
import { CommonModule } from '@angular/common';
import { Aircraft } from '../models/aircraft.model';
import { AircraftService } from '../services/aircraft.service';

@Component({
  selector: 'app-list-Task',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-Task.component.html'
})
export class ListTaskComponent implements OnInit {
  tasks: Task[] = [];
  aircraftList: Aircraft[] = [];

  constructor(
    private svc: TaskService,
    private aircraftSvc: AircraftService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
    this.aircraftSvc.getAll().subscribe(a => this.aircraftList = a);
  }

  load(): void {
    this.svc.getAll().subscribe(t => this.tasks = t);
  }

  getAircraftTail(id: number): string {
    const a = this.aircraftList.find(x => x.id === id);
    return a ? a.tail_number : '';
  }

  edit(id: number): void {
    this.router.navigate(['/tasks', id]);
  }

  delete(id: number): void {
    if (confirm('Delete this task?')) {
      this.svc.delete(id).subscribe(() => this.load());
    }
  }
}
