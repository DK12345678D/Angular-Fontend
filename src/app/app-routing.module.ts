import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseFormComponent } from './components/course-form/course-form.component';

import { CourseInstanceFormComponent } from './components/course-instance-form/course-instance-form.component';
import { CourseInstanceListComponent } from './components/course-instance-list/course-instance-list.component';

const routes: Routes = [

  { path: 'courses', component: CourseListComponent },
  { path: 'create-course', component: CourseFormComponent },
  { path: 'create-instance', component: CourseInstanceFormComponent },
  { path: 'instances', component: CourseInstanceListComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
