import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { AircraftService } from '../services/aircraft.service';

@Component({
  selector: 'app-create-aircraft',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-aircraft.component.html'
})
export class CreateAircraftComponent {
  form: any;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private svc: AircraftService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({ tail_number: ['', Validators.required] });
    if (this.id) {
      this.svc.getById(Number(this.id)).subscribe(a =>
        this.form.patchValue({ tail_number: a.tail_number })
      );
    }
  }

  save(): void {
    const val = this.form.value;
    const obs = this.id
      ? this.svc.update(Number(this.id), val)
      : this.svc.create(val);
    obs.subscribe(() => this.router.navigate(['/aircraft']));
  }
}
