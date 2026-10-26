import { SKILL_CATEGORIES } from './skills';

describe('Compétences issues du CV technique', () => {
  it('conserve les sept catégories, leurs 38 entrées et leurs noms', () => {
    expect(
      SKILL_CATEGORIES.map((category) => [
        category.name,
        category.skills.length,
      ]),
    ).toEqual([
      ['Outils', 7],
      ['Tests', 3],
      ['Frameworks', 11],
      ['Base de données', 8],
      ['Intégration continue (CI)', 4],
      ['Design', 2],
      ['Développement mobile', 3],
    ]);
    expect(SKILL_CATEGORIES.flatMap((category) => category.skills).length).toBe(
      38,
    );
  });

  it('préserve les demi-notes et les évaluations distinctes de React Native', () => {
    const tools = SKILL_CATEGORIES.find(
      (category) => category.id === 'outils',
    )!;
    const frameworks = SKILL_CATEGORIES.find(
      (category) => category.id === 'frameworks',
    )!;
    const mobile = SKILL_CATEGORIES.find(
      (category) => category.id === 'developpement-mobile',
    )!;
    expect(tools.skills.find((skill) => skill.id === 'github')!.score).toBe(
      3.5,
    );
    expect(
      frameworks.skills.find((skill) => skill.id === 'spring')!.score,
    ).toBe(1.5);
    expect(
      frameworks.skills.find((skill) => skill.id === 'react-native')!.score,
    ).toBe(2);
    expect(
      mobile.skills.find((skill) => skill.id === 'react-native')!.score,
    ).toBe(2.5);
  });

  it('distingue les deux absences de note sans fusionner les entrées SQL Server', () => {
    const unrated = SKILL_CATEGORIES.flatMap(
      (category) => category.skills,
    ).filter((skill) => skill.score === null);
    expect(unrated.map((skill) => skill.name)).toEqual([
      'PHPUnit',
      'SQL Server',
    ]);
    const database = SKILL_CATEGORIES.find(
      (category) => category.id === 'base-de-donnees',
    )!;
    expect(
      database.skills.find((skill) => skill.id === 'ms-sql-server')!.score,
    ).toBe(1);
    expect(
      SKILL_CATEGORIES.flatMap((category) => category.skills).filter(
        (skill) => skill.score === 0 || skill.score === 5,
      ),
    ).toEqual([]);
  });
});
