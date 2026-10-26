import { CvSkill } from '../../data/skills';

export interface PositionedSkill {
  readonly skill: CvSkill;
  readonly index: number;
  readonly radius: number;
  readonly x: number;
  readonly y: number;
}

/** Rayon en pourcentage du diagramme : six points de distance par point de note. */
export function skillRadius(score: number): number {
  return 12 + (5 - score) * 6;
}

/** Répartit les angles sans jamais modifier la distance qui représente la note. */
export function positionSkills(
  skills: readonly CvSkill[],
): readonly PositionedSkill[] {
  const rated = skills
    .map((skill, index) => ({ skill, index }))
    .filter((entry) => entry.skill.score !== null);
  return rated.map(({ skill, index }, position) => {
    const radius = skillRadius(skill.score!);
    const angle = ((-90 + (position * 360) / rated.length) * Math.PI) / 180;
    return {
      skill,
      index,
      radius,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  });
}

/** Affiche les demi-notes avec la virgule française, sans transformer une absence en zéro. */
export function skillScoreLabel(score: number | null): string {
  return score === null
    ? 'Non noté dans le CV'
    : `${String(score).replace('.', ',')} / 5`;
}
