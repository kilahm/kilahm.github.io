import { Route } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';

export const routes: Route[] = [
  {
    component: ResumeComponent,
    path: 'resume',
  },
  {
    path:'**',
    redirectTo: '/resume'
  }
];
