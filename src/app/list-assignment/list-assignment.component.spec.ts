import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssignmentComponent } from './list-assignment.component';

describe('ListAssignmentComponent', () => {
  let component: ListAssignmentComponent;
  let fixture: ComponentFixture<ListAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAssignmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
