import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechOrbitComponent } from '../../components/tech-orbit/tech-orbit.component';
import { ProjectGalleryComponent } from '../../components/project-gallery/project-gallery.component';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline.component';
import { ProfileIntroComponent } from '../../components/profile-intro/profile-intro.component';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    TechOrbitComponent,
    ProjectGalleryComponent,
    ExperienceTimelineComponent,
    ProfileIntroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly profile = PROFILE;
}
