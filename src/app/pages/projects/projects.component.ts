import { Component } from '@angular/core';
import { ProjectGalleryComponent } from '../../components/project-gallery/project-gallery.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectGalleryComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {}
