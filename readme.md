# Chouette Souscriptions

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

**TRAVAIL EN COURS** La documentation et tout le reste arriveront bientôt :D

Cette application est une application minimaliste permettant aux Chouettos de
simplifier la souscription aux parts sociales en pré-remplissant les
informations nécessaires en ligne.

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
