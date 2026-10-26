/** Autoévaluations retranscrites de la page 2 du CV technique fourni par Steven. */
export interface CvSkill {
  readonly id: string;
  readonly name: string;
  readonly score: number | null;
}

export interface SkillCategory {
  readonly id: string;
  readonly name: string;
  readonly skills: readonly CvSkill[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    id: 'outils',
    name: 'Outils',
    skills: [
      { id: 'trello', name: 'Trello', score: 3 },
      { id: 'github', name: 'GitHub', score: 3.5 },
      { id: 'powershell', name: 'PowerShell', score: 3 },
      { id: 'docker', name: 'Docker', score: 3 },
      { id: 'mantis', name: 'Mantis', score: 3 },
      { id: 'dbeaver', name: 'DBeaver', score: 3 },
      { id: 'postman', name: 'Postman', score: 3 },
    ],
  },
  {
    id: 'tests',
    name: 'Tests',
    skills: [
      { id: 'tests-unitaires', name: 'Tests unitaires', score: 2.5 },
      { id: 'phpunit', name: 'PHPUnit', score: null },
      { id: 'non-regression', name: 'Tests de non-régression', score: 2 },
    ],
  },
  {
    id: 'frameworks',
    name: 'Frameworks',
    skills: [
      { id: 'angularjs', name: 'AngularJS', score: 2.5 },
      { id: 'spring', name: 'Spring', score: 1.5 },
      { id: 'nodejs', name: 'Node.js', score: 2.5 },
      { id: 'symfony', name: 'Symfony', score: 2.5 },
      { id: 'angular', name: 'Angular', score: 2.5 },
      { id: 'java', name: 'Java', score: 2 },
      { id: 'dotnet', name: '.NET', score: 2 },
      { id: 'express', name: 'Express.js', score: 2 },
      { id: 'react-native', name: 'React Native', score: 2 },
      { id: 'react', name: 'React', score: 2 },
      { id: 'laravel', name: 'Laravel', score: 1 },
    ],
  },
  {
    id: 'base-de-donnees',
    name: 'Base de données',
    skills: [
      { id: 'sql-server', name: 'SQL Server', score: null },
      { id: 'ms-sql-server', name: 'MS SQL Server', score: 1 },
      { id: 'oracle', name: 'Oracle', score: 1 },
      { id: 'azure-sql', name: 'Microsoft Azure SQL', score: 1 },
      { id: 'graphql', name: 'GraphQL', score: 1 },
      { id: 'postgresql', name: 'PostgreSQL', score: 2 },
      { id: 'mysql', name: 'MySQL', score: 2 },
      { id: 'snowflake', name: 'Snowflake', score: 2.5 },
    ],
  },
  {
    id: 'integration-continue',
    name: 'Intégration continue (CI)',
    skills: [
      { id: 'azure-pipelines', name: 'Azure Pipelines', score: 2 },
      { id: 'rundeck', name: 'Rundeck', score: 3 },
      { id: 'azure-devops', name: 'Azure DevOps', score: 3 },
      { id: 'gitlab', name: 'GitLab', score: 4 },
    ],
  },
  {
    id: 'design',
    name: 'Design',
    skills: [
      { id: 'css-html', name: 'CSS/HTML', score: 4 },
      { id: 'figma', name: 'Figma', score: 2 },
    ],
  },
  {
    id: 'developpement-mobile',
    name: 'Développement mobile',
    skills: [
      { id: 'flutter', name: 'Flutter', score: 1 },
      { id: 'react-native', name: 'React Native', score: 2.5 },
      { id: 'android', name: 'Android', score: 1.5 },
    ],
  },
];
