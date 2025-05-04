// src/app/list-aircraft/list-aircraft.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule }            from '@angular/router';
import { Aircraft }          from '../models/aircraft.model';
import { AircraftService }   from '../services/aircraft.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-aircraft',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-aircraft.component.html'
})
export class ListAircraftComponent implements OnInit {
  aircraft: Aircraft[] = [];

  constructor(
    private svc: AircraftService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(a => this.aircraft = a);
  }

  delete(id: number) {
    if (!confirm('Delete this aircraft?')) return;
    this.svc.delete(id).subscribe(() => this.load());
  }

  edit(id: number) {
    this.router.navigate(['/aircraft', id]);
  }
}
