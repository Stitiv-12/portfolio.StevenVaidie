# Portfolio de Steven Vaidie

Portfolio personnel développé avec Angular. Le projet Angular se trouve directement à la racine de ce dépôt.

## Environnement

- Angular 22.2.3 ; Angular CLI, SSR et outils de compilation 22.2.4
- TypeScript 6.0.3 (dernière branche compatible avec Angular 22 ; TypeScript 7 n’est pas encore pris en charge)
- Node.js 26.12.1, fixé dans `.nvmrc`
- npm 11.20.0 et le fichier `package-lock.json` pour une installation reproductible
- Express 5.3, RxJS 7.8, Zone.js 0.16, Jasmine 7 et Karma 6.4

Activer la version Node du projet avec `nvm use` si nvm est installé. Le Node 22.20 utilisé par l’ancien portfolio est trop ancien pour Angular 22.

## Installation et lancement local

Depuis la racine du dépôt :

```bash
npm ci
npm start
```

Ouvrir [http://localhost:4200](http://localhost:4200). Les modifications sont rechargées automatiquement. Pour un aperçu accessible depuis Windows via WSL, `npm start -- --host 0.0.0.0` conserve explicitement les seuls hôtes locaux autorisés (`localhost`, `127.0.0.1` et `[::1]`), sans wildcard.

## Validation

```bash
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

Les tests utilisent Jasmine et Karma et nécessitent Chrome ou Chromium. Si le navigateur n’est pas détecté, définir `CHROME_BIN` vers son exécutable.

La compilation de production produit les fichiers dans `dist/angular-portfolio-web-site/`, avec les versions navigateur et serveur définies par la configuration Angular existante.

## Mise à niveau technique

Les migrations officielles Angular ont été appliquées successivement de 19 vers 20, puis 21 et 22. Elles adaptent le contexte de rendu serveur, les providers SSR et les templates vers les blocs `@if` et `@for`. Le constructeur maintenu `@angular/build` remplace le paquet Webpack déprécié, tout en conservant Jasmine/Karma.

Les dépendances non utilisées `ngx-bootstrap`, `@angular/forms` et `@angular/platform-browser-dynamic` ont été retirées. Aucun composant de l’application n’utilisait leurs API. Le provider historique d’animations, sans animations applicatives associées, a également été retiré. Le fallback du serveur utilise un wildcard nommé compatible avec Express 5.

Les tests conservent la stratégie Jasmine/Karma et vérifient notamment les liens de navigation et le rendu de la route projets. Les assets servis pendant les tests sont alignés sur ceux de la compilation.

Un override ciblé fixe Vite à 8.3.5 : Angular 22.2.4 épingle encore 8.3.0, concerné par des avis de sécurité. Ce correctif reste sur la même version mineure ; retirer l’override lorsque le constructeur Angular intègre une version corrigée.

La plage Node déclarée reste compatible avec les environnements d’hébergement existants : `^22.22.3 || ^24.15.0 || >=26.0.0`. npm 10 ou plus est accepté ; npm 11.20.0 est la version recommandée pour le développement.

## Vérifier le serveur de production

```bash
npm run build
npm run serve:ssr:AngularPortfolioWebSite
```

Le serveur écoute sur [http://localhost:4000](http://localhost:4000). La variable `PORT` permet de changer le port.

Angular 22 vérifie les hôtes des requêtes SSR. Les adresses locales sont autorisées dans `angular.json`. Les hôtes exacts fournis par Vercel (`VERCEL_URL`, `VERCEL_BRANCH_URL` et `VERCEL_PROJECT_PRODUCTION_URL`) sont autorisés automatiquement. Pour un autre domaine, définir `NG_ALLOWED_HOSTS` avec une liste de noms d’hôtes séparés par des virgules, sans schéma ni port. Les URL, ports, chemins et wildcards sont rejetés ; aucun wildcard global ni confiance supplémentaire dans les en-têtes proxy n’est activé.

## Structure

- `src/app/` : composants, pages et routes Angular.
- `src/assets/` : images et documents du portfolio.
- `public/` : ressources publiques existantes.
- `angular.json` : compilation, serveur local et tests.
- `vercel.json` : configuration existante de la plateforme de déploiement.

## Organisation Git

`main` conserve la version finale. Les branches de travail partent de `dev` et sont proposées en pull request vers `dev`, après développement et relecture indépendants. La fusion finale de `dev` dans `main` est effectuée par Steven.

## Personnaliser les contenus

Les informations publiques sont centralisées dans `src/app/data/portfolio.ts` : profil, projets, expériences et domaines de compétences. Pour enrichir l’expérience A5sys, modifier l’entrée correspondante de `EXPERIENCES` (poste, mission, technologies et futurs faits marquants). Le tableau `achievements` est réservé aux réalisations que Steven pourra préciser ; ne renseigner que des faits vérifiés. Les pages et la chronologie réutilisent ces données.

Le document téléchargeable est `src/assets/documents/cv.pdf`. Les aperçus des projets sont des illustrations HTML/CSS, identifiées comme telles, et non des captures d’écran des applications.

### Interactions

- Navigation responsive avec fermeture au clavier et lors d’un changement de page.
- Projets filtrables et cas détaillés dépliables, avec conservation des anciens fragments d’URL.
- Constellations interactives par catégorie du CV, avec notes et détails accessibles.
- Prise en compte de la préférence de réduction des animations.

### Compétences en orbite

Les 38 compétences, leurs sept catégories et les notes de la page 2 du CV sont centralisées dans `src/app/data/skills.ts`. Ce sont les autoévaluations du document, sur 5, avec demi-notes ; elles ne constituent pas une certification de niveau. `null` signifie « Non noté dans le CV » (PHPUnit et SQL Server), jamais zéro. Les deux entrées SQL Server et les deux évaluations de React Native par catégorie restent distinctes.

`skill-orbit-layout.ts` transforme une note en rayon relatif : `12 + (5 - note) × 6` pour cent de la largeur du diagramme. Une note plus élevée est donc plus proche du centre, de façon identique dans toutes les cartes ; les demi-notes sont entre deux cercles. Seuls les angles sont répartis pour disposer les repères. Les petits diagrammes utilisent des numéros associés aux noms et notes de la liste afin de préserver la lisibilité. Chaque instance fournit son propre `instanceId` pour ses identifiants accessibles.
