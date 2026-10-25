import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SKILL_GROUPS } from '../../data/portfolio';
import { TechOrbitComponent } from '../../components/tech-orbit/tech-orbit.component';

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [RouterLink, TechOrbitComponent],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css',
})
export class CompetenceComponent {
  readonly groups = SKILL_GROUPS;
  readonly softSkills = [
    'Esprit d’équipe',
    'Autonomie',
    'Adaptabilité',
    'Curiosité',
    'Écoute',
    'Organisation',
  ];
}
