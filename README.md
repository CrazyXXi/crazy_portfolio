# Nelxie Adisso — Portfolio

Portfolio personnel de **Nelxie Adisso**, Ingénieure Machine Learning, présenté sous la forme d'un éditeur de code (façon Visual Studio Code) : chaque section du CV (expériences, projets, compétences, certifications...) est un "fichier" explorable dans une arborescence de projet.

🔗 Démo locale : `npm run dev`

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) pour les icônes

## Démarrer

```bash
npm install
npm run dev
```

## Structure

```
src/
  components/ide/       # Composants de l'interface façon éditeur de code
    files/               # Contenu de chaque "fichier" (about.md, experience.js, ...)
  data/portfolioData.js  # Données du CV (source unique de vérité)
```
