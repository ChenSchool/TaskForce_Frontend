import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormArray, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AssignmentService } from '../services/assignment.service';
import { TaskService } from '../services/task.service';
import { PersonnelService } from '../services/personnel.service';
import { Task } from '../models/task.model';
import { Personnel } from '../models/personnel.model';

@Component({
  selector: 'app-create-assignment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-assignment.component.html'
})
export class CreateAssignmentComponent implements OnInit {
  form: any;
  taskList: Task[] = [];
  personList: Personnel[] = [];

  constructor(
    private fb: FormBuilder,
    private svc: AssignmentService,
    private taskSvc: TaskService,
    private personnelSvc: PersonnelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      task_id: [null, Validators.required],
      lines: this.fb.array([])
    });
    this.taskSvc.getAll().subscribe(t => this.taskList = t);
    this.personnelSvc.getAll().subscribe(p => this.personList = p);
  }

  get lines(): FormArray {
    return this.form.get('lines') as FormArray;
  }

  addLine() {
    this.lines.push(this.fb.group({
      personnel_id: [null, Validators.required],
      role: ['', Validators.required]
    }));
  }

  removeLine(i: number) {
    this.lines.removeAt(i);
  }

  save() {
    this.svc.create(this.form.value).subscribe(() =>
      this.router.navigate(['/assignments'])
    );
  }
}
