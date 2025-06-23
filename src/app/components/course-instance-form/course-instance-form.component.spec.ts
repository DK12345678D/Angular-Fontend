import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstanceFormComponent } from './course-instance-form.component';

describe('CourseInstanceFormComponent', () => {
  let component: CourseInstanceFormComponent;
  let fixture: ComponentFixture<CourseInstanceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInstanceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInstanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
