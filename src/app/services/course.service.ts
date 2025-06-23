import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, CourseDto } from '../models/course.model';
@Injectable({
  providedIn: 'root',
})
export class CourseService {
  private base = 'http://localhost:8888/api/courses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.base);
  }

  create(dto: CourseDto): Observable<Course> {
    return this.http.post<Course>(this.base, dto);
  }

  delete(courseId: string): Observable<any> {
    return this.http.delete(`${this.base}/${courseId}`, {
      observe: 'response',
    });
  }
  // In course-list.component.ts
  getPrereqs(course: Course): string {
    return course.prerequisites?.map((p) => p.courseId).join(', ') || 'None';
  }
}
