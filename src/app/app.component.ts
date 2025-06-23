import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CourseFormComponent } from './components/course-form/course-form.component';
import { CourseInstanceFormComponent } from './components/course-instance-form/course-instance-form.component';
import { CourseInstanceListComponent } from './components/course-instance-list/course-instance-list.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterLink,
    RouterOutlet,
    CourseFormComponent,
    CourseInstanceFormComponent,
    CourseInstanceListComponent,
    CourseListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'courses-frontend';
}
