import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { AircraftService } from '../services/aircraft.service';
import { Aircraft } from '../models/aircraft.model';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-task.component.html'
})
export class CreateTaskComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private svc: TaskService,
    private aircraftSvc: AircraftService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  form!: FormGroup;
  id: string | null = null;
  aircraftList: Aircraft[] = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({
      aircraft_id: [null, Validators.required],
      shift: ['1st', Validators.required],
      description: ['', Validators.required],
      status: ['Incomplete', Validators.required],
      date: ['', Validators.required]
    });

    this.aircraftSvc.getAll().subscribe(a => (this.aircraftList = a));

    if (this.id) {
      this.svc.getById(Number(this.id)).subscribe((t: Task) => {
        this.form.patchValue({
          aircraft_id: t.aircraft_id,
          description: t.description,
          status: t.status,
          date: t.date
        });
      });
    }
  }

  save(): void {
    const val = this.form.value;
    const obs = this.id
      ? this.svc.update(Number(this.id), val)
      : this.svc.create(val);
    obs.subscribe(() => this.router.navigate(['/tasks']));
  }
}
