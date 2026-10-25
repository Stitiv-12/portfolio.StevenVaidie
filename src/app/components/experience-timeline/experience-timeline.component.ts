import { Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio';

@Component({
  selector: 'app-experience-timeline',
  standalone: true,
  templateUrl: './experience-timeline.component.html',
  styleUrl: './experience-timeline.component.css',
})
export class ExperienceTimelineComponent {
  readonly experiences = EXPERIENCES;
}
