// src/app/list-Personnel/list-Personnel.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule }            from '@angular/router';
import { Personnel } from '../models/personnel.model';
import { PersonnelService }   from '../services/personnel.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-Personnel',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-Personnel.component.html'
})
export class ListPersonnelComponent implements OnInit {
  Personnel: Personnel[] = [];

  constructor(
    private svc: PersonnelService,
    private router: Router
  ) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe(a => this.Personnel = a);
  }

  delete(id: number) {
    if (!confirm('Delete this Personnel?')) return;
    this.svc.delete(id).subscribe(() => this.load());
  }

  edit(id: number) {
    this.router.navigate(['/personnel', id]);
  }
}
