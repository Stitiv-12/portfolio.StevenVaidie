import { Component, computed, input, signal } from '@angular/core';
import { ProjectPreviewComponent } from '../project-preview/project-preview.component';
import { PROJECTS, ProjectCategory } from '../../data/portfolio';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [ProjectPreviewComponent],
  templateUrl: './project-gallery.component.html',
  styleUrl: './project-gallery.component.css',
})
export class ProjectGalleryComponent {
  readonly featured = input(false);
  readonly categories = ['Tout', 'Web', 'Mobile', 'Expérimentation'] as const;
  readonly category = signal<ProjectCategory | 'Tout'>('Tout');
  readonly expanded = signal<string | null>(null);
  readonly visibleProjects = computed(() => {
    const projects = this.featured() ? PROJECTS.slice(0, 3) : PROJECTS;
    return this.category() === 'Tout'
      ? projects
      : projects.filter((project) => project.category === this.category());
  });

  /** Un seul cas détaillé reste ouvert à la fois dans la sélection. */
  toggleDetails(fragment: string): void {
    this.expanded.update((current) => (current === fragment ? null : fragment));
  }
}
