import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CourseInstance, InstanceDto } from '../models/course-instance.model';

@Injectable({ providedIn: 'root' })
export class InstanceService {
  private base = 'http://localhost:8888/api/instances';

  constructor(private http: HttpClient) {}
  create(dto: InstanceDto): Observable<CourseInstance> {
    return this.http.post<CourseInstance>(this.base, dto);
  }

  list(year: number, semester: number): Observable<CourseInstance[]> {
    return this.http.get<CourseInstance[]>(`${this.base}/${year}/${semester}`);
  }

  delete(year: number, semester: number, courseId: string): Observable<any> {
    return this.http.delete(`${this.base}/${year}/${semester}/${courseId}`, {
      observe: 'response',
    });
  }
}
