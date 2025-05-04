import { Component, OnInit } from '@angular/core';
import { CommonModule }      from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Assignment }        from '../models/assignment.model';
import { AssignmentService } from '../services/assignment.service';
import { Task }              from '../models/task.model';
import { TaskService }       from '../services/task.service';
import { Personnel }         from '../models/personnel.model';
import { PersonnelService }  from '../services/personnel.service';

@Component({
  selector: 'app-list-assignment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-assignment.component.html'
})
export class ListAssignmentComponent implements OnInit {
  assignments: Assignment[] = [];
  taskList: Task[] = [];
  personList: Personnel[] = [];

  constructor(
    private svc: AssignmentService,
    private taskSvc: TaskService,
    private personnelSvc: PersonnelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
    this.taskSvc.getAll().subscribe(t => this.taskList = t);
    this.personnelSvc.getAll().subscribe(p => this.personList = p);
  }

  load(): void {
    this.svc.getAll().subscribe(a => this.assignments = a);
  }

  getTaskDescription(id: number): string {
    const t = this.taskList.find(x => x.id === id);
    return t ? t.description : '';
  }

  getPersonnelName(id: number): string {
    const p = this.personList.find(x => x.id === id);
    return p ? p.name : '';
  }

  edit(id: number): void {
    this.router.navigate(['/assignments', id]);
  }

  delete(id: number): void {
    if (confirm('Delete this assignment?')) {
      this.svc.delete(id).subscribe(() => this.load());
    }
  }
}
