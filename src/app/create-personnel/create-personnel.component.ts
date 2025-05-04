import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { PersonnelService } from '../services/personnel.service';
import { Personnel } from '../models/personnel.model';

@Component({
  selector: 'app-create-personnel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-personnel.component.html'
})
export class CreatePersonnelComponent implements OnInit {
  form: any;
  id: string | null = null;

  constructor(
    private fb: FormBuilder,
    private svc: PersonnelService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Retrieve the 'id' from route parameters
    this.id = this.route.snapshot.params['id'];
    this.form = this.fb.group({
      name: ['', Validators.required],
      specialty: ['', Validators.required],
      role: ['', Validators.required]
    });


    // If 'id' exists, fetch personnel data and populate the form
    if (this.id) {
      this.svc.getById(Number(this.id)).subscribe({
        next: (p: Personnel) => {
          this.form.patchValue({ name: p.name, specialty: p.specialty, role: p.role });
        },
        error: (err) => {
          console.error('Error fetching personnel data:', err);
        }
      });
    }
  }

  save(): void {
    if (this.form.invalid) {
      console.warn('Form is invalid. Please fill out all required fields.');
      return;
    }

    const val = this.form.value;
    const obs = this.id
      ? this.svc.update(Number(this.id), val)
      : this.svc.create(val);

    obs.subscribe({
      next: () => {
        this.router.navigate(['/personnel']);
      },
      error: (err) => {
        console.error('Error saving personnel data:', err);
      }
    });
  }
}
