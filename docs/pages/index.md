# Pages

L’application contient différentes pages.

- [Login](login)

## Pages privées

Certaines pages doivent être réservées aux membres connectés. Pour ce faire, il suffit de les wrapper avec le composant `<Auth>`. Cela aura pour effet d’afficher [la page de login](login) dans le cas où l’utilisateur n’est pas connecté. Autrement elle vous donne accès aux données de l’utilisateur.

Voici un exemple :

```jsx
import React from "react";
import Auth from "./Auth";

const PagePrivee = () => {
  return <Auth>{user => <pre>{JSON.stringify(user, null, 2)}</pre>}</Auth>;
};

export default PagePrivee;
```
