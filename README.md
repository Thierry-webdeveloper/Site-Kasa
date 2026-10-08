![Logo Kasa](./src/assets/logo.svg)

# Application de location immobilière

Projet 7 de la formation **Intégrateur Web** (OpenClassrooms).

## 🎯 Description

Application web de location immobilière entre particuliers, développée
dans le cadre d'une mission freelance. Le projet consiste à implémenter
le front-end de l'application en React, à partir de maquettes Figma
et d'un fichier de données JSON.

## ✨ Fonctionnalités

- Affichage de la liste des logements disponibles
- Page de détail de chaque logement (galerie, description, équipements)
- Carrousel d'images avec navigation circulaire
- Menu déroulant animé (Collapse)
- Navigation entre les pages via React Router
- Page d'erreur 404 pour les routes inexistantes
- Carrousel accessible : navigation au clavier (flèches gauche et droite), boutons nommés, changement de photo annoncé aux lecteurs d'écran
- Menus déroulants reliés à leur contenu (`aria-expanded`, `aria-controls`)

## 🛠️ Stack technique

- React 19
- React Router 7
- Sass
- Vite
- Données : fichiers JSON importés dans le code (aucun serveur nécessaire)

## ⚙️ Installation

```bash
# Cloner le dépôt
git clone https://github.com/Thierry-webdeveloper/Site-Kasa.git

# Accéder au dossier
cd Site-Kasa

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 🚀 Déploiement

Le site est publié sur GitHub Pages par un workflow GitHub Actions (`.github/workflows/deploy.yml`) à chaque publication sur la branche `main`.

- `base: '/Site-Kasa/'` dans `vite.config.js` et `basename` dans le routeur : le site est servi dans un sous-dossier.
- Le build copie `index.html` en `404.html`, pour que les liens directs et les rechargements fonctionnent.

```bash
# Construire et prévisualiser la version de production
npm run build
npm run preview   # http://localhost:4173/Site-Kasa/
```

## 🗺️ Pages de l'application

- `/` → Page d'accueil (liste des logements)
- `/logement/:id` → Page de détail d'un logement
- `/about` → Page À propos
- `*` → Page d'erreur 404

## 🔗 Liens

- **Site en ligne** : https://thierry-webdeveloper.github.io/Site-Kasa/
- **Dépôt GitHub** : https://github.com/Thierry-webdeveloper/Site-Kasa

---

_Thierry-webdeveloper — Formation OpenClassrooms — Intégrateur Web_
