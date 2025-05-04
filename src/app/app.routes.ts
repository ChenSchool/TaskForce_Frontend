import { Routes } from '@angular/router';
import { ListAircraftComponent } from './list-aircraft/list-aircraft.component';
import { CreateAircraftComponent } from './create-aircraft/create-aircraft.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { ListPersonnelComponent } from './list-personnel/list-personnel.component';
import { CreatePersonnelComponent } from './create-personnel/create-personnel.component';
import { ListAssignmentComponent } from './list-assignment/list-assignment.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';

export const routes: Routes = [
  { path: 'aircraft',       component: ListAircraftComponent },
  { path: 'aircraft/new',   component: CreateAircraftComponent },
  { path: 'aircraft/:id',   component: CreateAircraftComponent },
  { path: 'tasks',         component: ListTaskComponent },
  { path: 'tasks/new',     component: CreateTaskComponent },
  { path: 'tasks/:id',     component: CreateTaskComponent },
  { path: 'personnel',     component: ListPersonnelComponent },
  { path: 'personnel/new', component: CreatePersonnelComponent },
  { path: 'personnel/:id', component: CreatePersonnelComponent },
  { path: 'assignments',    component: ListAssignmentComponent },
  { path: 'assignments/new',component: CreateAssignmentComponent },
  { path: '', redirectTo: 'aircraft', pathMatch: 'full' },
  { path: '**', redirectTo: 'aircraft' },
];
