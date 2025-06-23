export interface Course {
  id?: number;
  courseId: string;
  title: string;
  description: string;
  prerequisites: Course[];
}
export interface CourseDto {
  courseId: string;
  title: string;
  description: string;
  prerequisiteIds: string[];
}
