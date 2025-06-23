import { Component, OnInit } from '@angular/core';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course.service';
import { Course, CourseDto } from '../../models/course.model';
import { MatSnackBar,MatSnackBarModule } from '@angular/material/snack-bar';
// Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-course-form',
  standalone: true,
  imports: [NgForOf, FormsModule,
    MatSnackBarModule,

    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.css',
})
export class CourseFormComponent implements OnInit {
  courses: Course[] = [];
  dto: CourseDto = {
    courseId: '',
    title: '',
    description: '',
    prerequisiteIds: [],
  };

  constructor(
    private courseService: CourseService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.courseService.getAll().subscribe((list) => (this.courses = list));
  }

  submit() {
    this.courseService.create(this.dto).subscribe({
      next: (c) => {
        this.snackBar.open(`Created ${c.courseId}`, 'Close', {
          duration: 2000,
        });
        this.ngOnInit();
      },
      error: (err) => {
        this.snackBar.open(err.error, 'Close', { duration: 3000 });
      },
    });
  }
}
