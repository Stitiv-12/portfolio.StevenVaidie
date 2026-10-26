import { Component, computed, input, signal } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SKILL_CATEGORIES, SkillCategory } from '../../data/skills';
import {
  positionSkills,
  skillRadius,
  skillScoreLabel,
} from './skill-orbit-layout';

@Component({
  selector: 'app-tech-orbit',
  standalone: true,
  imports: [RouterLink, NgTemplateOutlet],
  host: { '[class.compact-orbit]': 'compact()' },
  templateUrl: './tech-orbit.component.html',
  styleUrls: ['./tech-orbit.component.css', './tech-orbit-details.css'],
})
export class TechOrbitComponent {
  readonly category = input<SkillCategory>();
  readonly compact = input(false);
  readonly instanceId = input.required<string>();
  readonly categories = SKILL_CATEGORIES;
  readonly categoryId = signal('design');
  readonly selectedSkillId = signal<string | null>(null);
  readonly currentCategory = computed(
    () =>
      this.category() ??
      this.categories.find((category) => category.id === this.categoryId())!,
  );
  readonly nodes = computed(() =>
    positionSkills(this.currentCategory().skills),
  );
  readonly selectedSkill = computed(
    () =>
      this.currentCategory().skills.find(
        (skill) => skill.id === this.selectedSkillId(),
      ) ?? this.currentCategory().skills[0],
  );
  readonly rings = [5, 4, 3, 2, 1].map((score) => ({
    score,
    radius: skillRadius(score),
  }));
  readonly scoreLabel = skillScoreLabel;
  readonly detailsId = computed(() => `${this.instanceId()}-description`);
  readonly legendId = computed(() => `${this.instanceId()}-legend`);

  /** Change de famille et réinitialise la compétence sélectionnée dans cet aperçu. */
  selectCategory(event: Event): void {
    this.categoryId.set((event.target as HTMLSelectElement).value);
    this.selectedSkillId.set(null);
  }
}
