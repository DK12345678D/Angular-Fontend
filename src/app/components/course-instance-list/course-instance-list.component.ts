import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CourseInstance } from '../../models/course-instance.model';
import { FormsModule } from '@angular/forms';
import { InstanceService } from '../../services/instance.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-instance-list',
  standalone: true,
  imports: [NgForOf, FormsModule, NgIf,
   ],
  templateUrl: './course-instance-list.component.html',
  styleUrl: './course-instance-list.component.css',
})
export class CourseInstanceListComponent {
  year = new Date().getFullYear();
  semester = 1;
  instances: CourseInstance[] = [];

  constructor(
    private instanceService: InstanceService,
    private snackBar: MatSnackBar
  ) {}

  load() {
    this.instanceService
      .list(this.year, this.semester)
      .subscribe((list) => (this.instances = list));
  }

  delete(inst: CourseInstance) {
    this.instanceService
      .delete(inst.year, inst.semester, inst.course.courseId)
      .subscribe({
        next: () => {
          this.snackBar.open('Deleted', 'Close', { duration: 2000 });
          this.load();
        },
        error: () =>
          this.snackBar.open('Error deleting', 'Close', { duration: 3000 }),
      });
  }
}
