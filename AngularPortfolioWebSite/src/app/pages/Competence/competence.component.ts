import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-competence',
  standalone: true,
  imports: [NgFor],
  templateUrl: './competence.component.html',
  styleUrl: './competence.component.css'
})
export class CompetenceComponent {
  softSkills = [
    'Esprit d\'équipe',
    'Autonome',
    'Adaptabilité',
    'Curieux',
    'Sens de l\'écoute',
    'Sens de l\'organisation',
  ];
  frontEndSkills = [
    { name: 'Angular', image: 'assets/images/competence/Angular.png' },
    { name: 'React', image: 'assets/images/competence/React.png' },
    { name: 'HTML/CSS', image: 'assets/images/competence/htmlcss.png' },
    { name: 'JavaScript', image: 'assets/images/competence/JavaScript.png' },
    { name: 'TypeScript', image: 'assets/images/competence/TypeScript.png' },
    { name: 'Bootstrap', image: 'assets/images/competence/bootstrap.png' },
  ];

  backEndSkills = [
    { name: 'Node Js', image: 'assets/images/competence/nodeJs.png' },
    { name: 'PhP', image: 'assets/images/competence/Php.png' },
    { name: 'Python', image: 'assets/images/competence/Python.png' },
    { name: 'C#', image: 'assets/images/competence/C_.png' },
    { name: 'Kotlin', image: 'assets/images/competence/Kotlin.png'},
    { name: 'My Sql', image: 'assets/images/competence/Sql.png' },
    { name: 'Laravel', image: 'assets/images/competence/laravel.png' }
  ];

  toolsSkills = [
    { name: 'Figma', image: 'assets/images/competence/figma.png' },
    { name: 'Github', image: 'assets/images/competence/Github.png' },
    { name: 'Gitlab', image: 'assets/images/competence/gitlab.png' },
    { name: 'IntelliJ IDEA', image: 'assets/images/competence/Intellij.png' },
    { name: 'Visual Studio', image: 'assets/images/competence/visual-studio-code.png' },
    { name: 'Aml', image: 'assets/images/competence/Aml.png' }
  ];

}
