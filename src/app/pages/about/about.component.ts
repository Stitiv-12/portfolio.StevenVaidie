import { Component } from '@angular/core';
import { ExperienceTimelineComponent } from '../../components/experience-timeline/experience-timeline.component';
import { PROFILE } from '../../data/portfolio';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ExperienceTimelineComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  readonly profile = PROFILE;
  readonly education = [
    {
      period: '2025 — 2027',
      title: 'Mastère Lead Front End Developer',
      school: 'ECV Nantes',
    },
    {
      period: '2022 — 2025',
      title: 'BUT Informatique',
      school: 'IUT de Nantes',
    },
    {
      period: '2019 — 2022',
      title: 'Baccalauréat STI2D',
      school: 'Lycée Léonard de Vinci · Montaigu',
    },
  ];
}
