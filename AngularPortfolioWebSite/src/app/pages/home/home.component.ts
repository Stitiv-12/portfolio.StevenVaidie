import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NgFor, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileImage = 'assets/images/profile/moi.jpg';
  name = 'Steven Vaidie';
  subtitle = 'Développeur Web Front-End passionné';
  description = 'Je conçois des interfaces modernes, accessibles et performantes. Mon objectif est de transformer des idées en expériences numériques fluides.';
  email = 'steven.vaidie10@gmail.com';
  phone = '06 51 55 91 11';
  socialMediaLinks= [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/steven-vaidie-ab1234267/' },
    { name: 'GitHub', url: 'https://github.com/Stitiv-12'},
    { name: 'CV', url: 'assets/documents/cv.pdf' },
    { name: 'Lettre de motivation', url: 'assets/documents/lettremotivation.pdf' }
  ]
  projects = [
    {
      name: 'Portfolio',
      description: 'Site web personnel pour présenter mes projets et compétences.',
      fragment: 'portfolio'
    },
    {
      name: 'Sanatio App-Mobile',
      description: 'Application mobile pour la gestion des traitements médicaux.',
      fragment: 'sanatio-app-mobile'
    },
    {
      name: 'Site e-commerce de parfum',
      description: 'Site de vente de parfums avec gestion des paniers et commandes.',
      fragment: 'site-e-commerce-de-parfum'
    },
    {
      name: 'Stage 2ème année en entreprise',
      description: 'Convertisseur de données en C# et interface React pour données AML.',
      fragment: 'stage-2eme-annee-en-entreprise'
    },
    {
      name: 'Générateur de Particules',
      description: 'Visualisation interactive de particules en Go à partir d\'images.',
      fragment: 'generateur-de-particules'
    },
    {
      name: 'Puissance 4',
      description: 'Jeu multijoueur Puissance 4 en Go avec communication via serveur.',
      fragment: 'puissance-4'
    },
    {
      name: 'Pickomino',
      description: 'Adaptation numérique du jeu de société Pickomino en JavaFX.',
      fragment: 'pickomino'
    },
    {
      name: 'ClashRoyal',
      description: 'Présentation sous forme de deck clash royal.',
      fragment: 'clashroyal'
    }
  ];
  
    
  
}
