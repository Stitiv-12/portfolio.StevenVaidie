import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-tech-orbit',
  standalone: true,
  templateUrl: './tech-orbit.component.html',
  styleUrl: './tech-orbit.component.css',
})
export class TechOrbitComponent {
  readonly nodes = [
    {
      label: 'Interface',
      code: 'UI',
      tech: 'Angular · TypeScript',
      description:
        'Composer des interfaces web, de la structure aux interactions.',
    },
    {
      label: 'Logique',
      code: 'API',
      tech: 'Node.js · C#',
      description:
        'Relier les besoins de l’interface à une logique côté serveur.',
    },
    {
      label: 'Données',
      code: 'DB',
      tech: 'SQL · Neo4j',
      description:
        'Structurer et faire circuler les informations utiles à l’application.',
    },
  ];
  readonly activeNode = signal(0);
}
