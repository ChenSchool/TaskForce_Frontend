import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonnelComponent } from './create-personnel.component';

describe('CreatePersonnelComponent', () => {
  let component: CreatePersonnelComponent;
  let fixture: ComponentFixture<CreatePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePersonnelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
