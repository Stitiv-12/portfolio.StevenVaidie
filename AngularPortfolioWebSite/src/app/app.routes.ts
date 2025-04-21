import { RouterModule, Routes } from '@angular/router';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { CompetenceComponent } from './pages/Competence/competence.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'competence', component: CompetenceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutesProvider = provideRouter(
  routes,
  withInMemoryScrolling({
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
  })

  
);
