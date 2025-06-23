import { NgIf, NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgIf, NgForOf, RouterLink, RouterOutlet,
    ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];
  constructor(
    private courseService: CourseService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.load();
  }
  load() {
    this.courseService.getAll().subscribe((list) => (this.courses = list));
  }
getPrereqs(course: any): string {
   return (course.prerequisiteIds || []).join(', ');
}

  delete(courseId: string) {
    this.courseService.delete(courseId).subscribe({
      next: () => {
        this.snackBar.open(`Deleted ${courseId}`, 'Close', { duration: 2000 });
        this.load();
      },
      error: (err) => {
        this.snackBar.open(
          err.status === 409 ? err.error : 'Error deleting',
          'Close',
          { duration: 3000 }
        );
      },
    });
  }
}
