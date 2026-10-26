import { SKILL_CATEGORIES } from '../../data/skills';
import {
  positionSkills,
  skillRadius,
  skillScoreLabel,
} from './skill-orbit-layout';

describe('Géométrie des orbites', () => {
  it('rapproche strictement les notes plus élevées et place les demi-notes à mi-distance', () => {
    for (let score = 1; score < 5; score += 0.5)
      expect(skillRadius(score + 0.5)).toBeLessThan(skillRadius(score));
    expect(skillRadius(3.5)).toBe((skillRadius(3) + skillRadius(4)) / 2);
    expect(skillRadius(2.5)).toBe((skillRadius(2) + skillRadius(3)) / 2);
  });

  it('conserve exactement le même rayon pour une note donnée dans toutes les catégories', () => {
    const nodes = SKILL_CATEGORIES.flatMap((category) =>
      positionSkills(category.skills),
    );
    expect(nodes.length).toBe(36);
    for (const node of nodes) {
      expect(Math.hypot(node.x, node.y)).toBeCloseTo(
        skillRadius(node.skill.score!),
        10,
      );
      expect(node.radius).toBe(skillRadius(node.skill.score!));
    }
    expect(
      nodes
        .filter((node) => node.skill.score === 2.5)
        .every(
          (node) =>
            node.radius ===
            nodes.find((item) => item.skill.score === 2.5)!.radius,
        ),
    ).toBeTrue();
  });

  it('exclut du diagramme les compétences non notées tout en gardant les repères de la liste', () => {
    const category = SKILL_CATEGORIES.find(
      (category) => category.id === 'tests',
    )!;
    const nodes = positionSkills(category.skills);
    expect(nodes.map((node) => node.skill.id)).toEqual([
      'tests-unitaires',
      'non-regression',
    ]);
    expect(nodes.map((node) => node.index)).toEqual([0, 2]);
    expect(skillScoreLabel(null)).toBe('Non noté dans le CV');
    expect(skillScoreLabel(2.5)).toBe('2,5 / 5');
  });
});
