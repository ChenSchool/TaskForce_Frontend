export interface AssignmentLine {
  personnel_id: number;
  role: 'Captain'|'Coordinator'|'Collaborator'|'Trainee';
}
export interface Assignment {
  id?: number;
  task_id: number;
  lines: AssignmentLine[];   // multiple people per assignment
}
