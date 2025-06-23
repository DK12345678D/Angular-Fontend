import { Course } from './course.model';
export interface CourseInstance {
  id?: number;
  course: Course;
  year: number;
  semester: number;
}
export interface InstanceDto {
  courseId: string;
  year: number;
  semester: number;
}
