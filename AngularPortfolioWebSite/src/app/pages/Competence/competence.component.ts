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
    { name: 'Angular', image: 'img/competence/Angular.png' },
    { name: 'React', image: 'img/competence/React.png' },
    { name: 'HTML/CSS', image: 'img/competence/htmlcss.png' },
    { name: 'JavaScript', image: 'img/competence/JavaScript.png' },
    { name: 'TypeScript', image: 'img/competence/TypeScript.png' },
    { name: 'Bootstrap', image: 'img/competence/bootstrap.png' },
  ];

  backEndSkills = [
    { name: 'Node Js', image: 'img/competence/nodeJs.png' },
    { name: 'PhP', image: 'img/competence/Php.png' },
    { name: 'Python', image: 'img/competence/Python.png' },
    { name: 'C#', image: 'img/competence/C_.png' },
    { name: 'Kotlin', image: 'img/competence/Kotlin.png'},
    { name: 'My Sql', image: 'img/competence/Sql.png' },
    { name: 'Laravel', image: 'img/competence/laravel.png' }
  ];

  toolsSkills = [
    { name: 'Figma', image: 'img/competence/figma.png' },
    { name: 'Github', image: 'img/competence/Github.png' },
    { name: 'Gitlab', image: 'img/competence/gitlab.png' },
    { name: 'IntelliJ IDEA', image: 'img/competence/Intellij.png' },
    { name: 'Visual Studio', image: 'img/competence/visual-studio-code.png' },
    { name: 'Aml', image: 'img/competence/Aml.png' }
  ];

}
