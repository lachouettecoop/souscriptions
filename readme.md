# Chouette Souscriptions

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**ABANDONNÉE** Cette application n’a jamais été utilisée en production car le besoin a évolué.
Nous avons décidé de faire évoluer notre application historique [Admin Chouettos](https://github.com/lachouettecoop/chouette-admin-chouettos) au lieu de créer une nouvelle application en partant de zéro.

Cette application est une application minimaliste permettant aux Chouettos de
simplifier la souscription aux parts sociales en pré-remplissant les
informations nécessaires en ligne.

## Documentation

La documentation est disponible sur
[le wiki du projet](https://github.com/lachouettecoop/souscriptions/wiki/).

Elle contient de quoi comprendre l’état actuel du projet et s’y retrouver pour
aider à l’améliorer.

## Présentation

Une présentation du premier prototype et de quelques cas d’usages potentiels :

[![Vidéo de présentation du prototype de l’application de souscription](https://img.youtube.com/vi/OBFxTrIkNeU/0.jpg)](https://www.youtube.com/watch?v=OBFxTrIkNeU)

## Installation

- `npm install`
- créer un fichier `.env` avec les accès aux services tiers (exemple de fichier
  disponible dans `.env.dist`)
- récupérez une base existante ou dupliquez celle par défaut dans
  `data/souscriptions.json` (`cp data/souscriptions{.default,}.json`)

## Lancement

- En mode développeur : `npm run dev`
- En production : `npm run start`

## Contribution

Nous suivons la convention https://www.conventionalcommits.org/ pour les
messages de commits, afin de permettre une publication simple des nouvelles
versions et des changelogs. Nous pensons que cela facilite le suivi du projet et
sa maintenance/reprise sur le long terme.

**Cela n’est pas très compliqué !** Au lieu de faire `git commit`, exécutez
`npm run commit` et laissez-vous guider !

## Déploiement

- `npm run build`
