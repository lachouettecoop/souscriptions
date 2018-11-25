# Bienvenue

Cette documentation contient tout ce qu’il vous faut savoir pour travailler et
contribuer à ce projet.

- [TODO](#todo)
- [Composants](#composants)
- [Ressources externes](#ressources-externes)

## TODO

Voici les prochaines choses à réaliser.

### _(En cours)_ 0.1 — MVP

**But :** permettre aux Chouettos de présaisir leurs informations

En tant que Chouettos ayant adhéré à l’association, je peux me connecter à
l’application avec mes identifiants actuels. Il m’est alors proposé de
préremplir mes informations de souscription, et je peux modifier celles-ci tant
que le BdM ne les a pas validé.

En tant que membre autorisé du BdM, je peux voir les informations saisies afin
de les valider et homogénéïser. Une fois les informations valides, je peux
bloquer leur édition par le Chouettos.

- [x] import des designs tokens depuis le styleguid

  e
- [x] faire un gabarit de page pas trop moche
- [x] persister le token JWT dans le `sessionStorage` pour rester un minimum
      connecté
- [ ] prototype front du formulaire de souscription (voir
      [wizards](#formulaires))
- [ ] prototype front des écrans du MVP
- [ ] intéractions serveur et persistence des données
- [ ] upload et gestion des fichiers

### 0.2 — Promotion et suivi

**But :** faciliter la relation entre le BdM et les Chouettos pour les
souscriptions

- Prochaines dates de réunions de souscription.
- Suivi des dossiers d’inscription
- Saisie des informations manquantes durant la réunion (compte Photographe)

## Composants

Les principaux composants disponibles pour créer vos écrans.

- [Pages](pages)

## Ressources externes

Quelques liens et projets pour inspiration / documentation additionnelle.

### Authentification Node

- https://github.com/auth0/express-jwt
- https://github.com/MichielDeMey/express-jwt-permissions
- https://github.com/fastify/fastify-auth/blob/master/example.js

### Base de données

- https://gist.github.com/drodsou/1a72d843bc7842903601bb9f0e77173e

### Upload de fichiers

- https://www.npmjs.com/package/multer

### Formulaires

- https://www.npmjs.com/package/react-albus
- https://github.com/jaredpalmer/formik/blob/master/examples/MultistepWizard.js
