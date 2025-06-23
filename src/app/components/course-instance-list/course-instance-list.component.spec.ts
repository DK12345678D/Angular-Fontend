import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInstanceListComponent } from './course-instance-list.component';

describe('CourseInstanceListComponent', () => {
  let component: CourseInstanceListComponent;
  let fixture: ComponentFixture<CourseInstanceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseInstanceListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInstanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
