import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompetenceComponent } from './pages/Competence/competence.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Steven Vaidie — Concepteur développeur',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Parcours — Steven Vaidie',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projets — Steven Vaidie',
  },
  {
    path: 'competence',
    component: CompetenceComponent,
    title: 'Compétences — Steven Vaidie',
  },
  { path: '**', redirectTo: '' },
];
