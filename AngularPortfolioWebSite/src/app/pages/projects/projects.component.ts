import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, ViewportScroller } from '@angular/common';

interface Project {
  title: string;
  objective: string;
  realisation: string;
  description: string;
  functions: string[];
  githubUrl: string;
  fragment: string;
}

@Component({
  selector: 'app-projects',
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Sanatio App-Mobile',
      fragment: 'sanatio-app-mobile',
      objective: "Création d'une application mobile pour aider les patients à gérer leurs traitements médicaux.",
      realisation: "J'ai réalisé ce projet avec 6 autres personnes, en utilisant React-Native pour le front-end et Express pour les API.",
      description: "L'application permet aux utilisateurs de gérer leurs prescriptions, suivre leur calendrier de médicaments et consulter les stocks disponibles.",
      functions: [
        'Ajout de prescriptions manuelles ou via un scan d\'ordonnance',
        'Calendrier avec rappel des médicaments à prendre',
        'Indication des fins de validité des ordonnances et gestion du stock de médicaments'
      ],
      githubUrl: 'https://github.com/Stitiv-12/Sanatio-App',
    },
    {
      title: 'Générateur de Particules',
      fragment: 'generateur-de-particules',
      objective: 'Apprendre Go en créant un générateur de particules interactif à partir d\'une images correspondant à une particule.',
      realisation: 'Création d\'un logiciel permettant de générer des particules et de les manipuler à l\'aide de la souris.',
      description: 'Ce projet a exploré les bases de la programmation en Go tout en appliquant des concepts d\'animations et de gestion de particules.',
      functions: [
        'Génération de particules à partir d\'un pixel',
        'Modification de la couleur et taille des particules',
        'Déplacement et création de particules en fonction du clic ou du mouvement de la souris',
        'Simulation de gravité et collisions entre particules'
      ],
      githubUrl: 'https://github.com/Stitiv-12/Generateur_particule'
    },
    {
      title: 'Puissance 4',
      fragment: 'puissance-4',
      objective: 'Réaliser un jeu Puissance 4 avec gestion de serveur pour l\'interaction entre joueurs.',
      realisation: 'Développement du jeu en Go, avec gestion des Goroutines pour la communication entre les joueurs via un serveur.',
      description: 'Ce projet a permis de découvrir la gestion des connexions et de la communication en temps réel entre deux utilisateurs.',
      functions: [
        'Jeu Puissance 4 multijoueur en ligne',
        'Gestion des interactions entre deux joueurs via un serveur',
        'Utilisation de Goroutines pour gérer la communication asynchrone'
      ],
      githubUrl: 'https://github.com/Stitiv-12/Puissance-4'
    },
    {
      title: 'Pickomino',
      fragment: 'pickomino',
      objective: 'Réaliser le jeu de société Pickomino en version numérique.',
      realisation: 'Projet en équipe de 4 personnes, développement avec Kotlin et JavaFX pour la partie graphique et logique du jeu.',
      description: 'Une adaptation numérique du jeu de société où les règles ont été reproduites fidèlement pour offrir une expérience de jeu fluide.',
      functions: [
        'Interface graphique avec JavaFX',
        'Gestion des règles du jeu de société Pickomino',
        'Multijoueur et interactions entre joueurs'
      ],
      githubUrl: 'https://github.com/Stitiv-12/Pickomino'
    },
    {
      title: 'Site e-commerce de parfum',
      fragment: 'site-e-commerce-de-parfum',
      objective: 'Mettre en œuvre mes compétences en Laravel et PHP sur un projet concret de site e-commerce.',
      realisation: 'Projet réalisé avec 3 autres personnes. Il s\'agit d\'un site complet avec gestion des produits, paiement et profils utilisateurs.',
      description: 'Les utilisateurs peuvent acheter des parfums, gérer leur panier, et passer commande via un processus de paiement sécurisé.',
      functions: [
        'Affichage des parfums disponibles',
        'Recherche et tri des parfums',
        'Création de panier et gestion des commandes',
        'Historique des achats et gestion des profils utilisateurs'
      ],
      githubUrl: 'https://github.com/Stitiv-12/ecommerce-parfum',
    },
    {
      title: 'Stage 2ème année en entreprise',
      fragment: 'stage-2eme-annee-en-entreprise',
      objective: 'Développer un convertisseur de format de données et une interface web pour l\'entrée des données.',
      realisation: 'Utilisation de C# pour le convertisseur et React pour l\'interface web, avec gestion des données dans le format AML et stockage sur Google Drive.',
      description: 'Ce projet m\'a permis de comprendre l\'intégration de différentes technologies pour la gestion de données structurées et leur transfert via une API.',
      functions: [
        'Convertisseur de données entre différents formats',
        'Interface web pour l\'entrée des données',
        'Stockage et gestion des fichiers AML sur Google Drive'
      ],
      githubUrl: 'https://github.com/Stitiv-12/aml-converter'
    }
  ];
  constructor(
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  activeRoute: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string | null) => {
      if (fragment) {
        // Petite pause pour laisser le DOM se mettre à jour
        setTimeout(() => {
          const element = document.getElementById(fragment);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center' // ← C’est ici que la magie opère
            });
          }
        }, 0);
      }
    });
  }
  
}
