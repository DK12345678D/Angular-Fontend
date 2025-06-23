import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgForOf } from '@angular/common';
import {
  CourseInstance,
  InstanceDto,
} from '../../models/course-instance.model';
import { Course } from '../../models/course.model';
import { CourseService } from '../../services/course.service';
import { InstanceService } from '../../services/instance.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-course-instance-form',
  standalone: true,
  imports: [FormsModule, NgForOf,
   
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule],
  templateUrl: './course-instance-form.component.html',
  styleUrl: './course-instance-form.component.css',
})
export class CourseInstanceFormComponent implements OnInit {
  courses: Course[] = [];
  dto: InstanceDto = {
    courseId: '',
    year: new Date().getFullYear(),
    semester: 1,
  };

  constructor(
    private courseService: CourseService,
    private instanceService: InstanceService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.courseService.getAll().subscribe((list) => (this.courses = list));
  }

  submit() {
    this.instanceService.create(this.dto).subscribe({
      next: (inst) =>
        this.snackBar.open(
          `Instance created: ${inst.course.courseId}`,
          'Close',
          { duration: 2000 }
        ),
      error: (err) =>
        this.snackBar.open(err.error, 'Close', { duration: 3000 }),
    });
  }
}
