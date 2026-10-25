import { Component, input } from '@angular/core';
import { Project } from '../../data/portfolio';

@Component({
  selector: 'app-project-preview',
  standalone: true,
  templateUrl: './project-preview.component.html',
  styleUrls: [
    './project-preview.component.css',
    './project-preview-objects.css',
  ],
})
export class ProjectPreviewComponent {
  readonly item = input.required<Project>({ alias: 'project' });
  readonly large = input(false);
  readonly compact = input(false);
  readonly particles = Array.from({ length: 23 }, (_, i) => i);
  readonly slots = Array.from({ length: 28 }, (_, i) => i);
}
