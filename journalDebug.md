# Journal de debug - 724Events  16/02/2025
(corrigé les erreurs(syntaxe markdown, fautes de frappe...) du journalTest. md, et réécrire certaines parties car d'autres améliorations effectué et d'autres choix tech que ceux decrit (cf, jDbug.txt local) )


## Bugs Identifiés

1. Section du header :

1.1 Slider  : 

    - Tri incorrect des événenments
    - les boutons radio n'indique pas sur quelle slide on se trouve au défilement des slides
    - un slide ce s'affiche pas correctement(un blanc apparaît)

1.2 Logo :

     - pas de cursor pointer sur le logo
     - les caractères n'ont pas la bonne police (Kalimati)
     - le style du logo n'est pas appliqué correctement (pas de gradé)


1.3 Les boutons de la navbar : 

     - le bouton : 'Nos services ne renvoi pas la section 'Nos services'
     - le bouton 'Nos réalisations' ne renvoi pas à la section 'Nos          réalisations'
     - le boutons 'Notre équipe ne renvoie pas à la section 'Notre équipe'
     -> les ancres  de la navbar ne renvoie pas aux sections correspondantes (les id dans  Page/Home/inex.js ne sont pas appliqué aux section, les ancres correpondantes se trouvent dans Container/Menu/Boutons/index.js
 )

2. Section ' Nos réalisations ' :

2.1 Filtre des réalisations : 

    - non fonctionnel (ils doivent afficher les réalisations selon le filtre adapté (ex: Conférence doit afficher les conférences, ...))

2.2 Modale :

    - ne se ferme pas lorsque l'utilisateur clique en dehors de la modal
    - la liste des événenements ne semble pas afficher les bons mois et certains reste vide (sera corriger en même temps que le problème de key du slider pour les mois)
    - La modale n'affiche pas les les même date que celles des événements sur les cards (voir si correct pour l'exercice, ou a corriger)

3. Formulaire de contact : 
     - Message de confirmation manquant quand le message est envoyé (au click sur envoyer suite à un remplissage correct des champs)
     - Pas de message d'erreur sur les sections du formulaire (si ces sections ne sont pas remplies ou mal remplies):
     - nom
     - prénom
     - email
     - message
     Vérifier qu'ils ont les attr required.. et que chaque élément a bien un attr type...

4. Footer

      - section 'Notre dernière prestation' :
        - la vignette n'affiche pas la'image de la dernière prestation
        - le nom ne s'affiche pas
        - le mois ne s'affiche pas

5. Typos à corrigé :
     
     - trouver et corriger les typos (dans le fichier index.js) de :
       - logo les styles inline ne sont pas écrit  en jsx , il existe des vriables scss spécifique a notre projet autant ls appliqué directement dans le scss de Logo
       - Vérifié si d'autres stymles sont mal appliqué
6. Gros problèmes de performance :
Large content full Paint a 879.5
cumulative Layout  a 2.00

7. Problèmes de stackoverflow

hook.js:608 Warning: Encountered two children with the same key, `undefined`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. Error Component Stack
    at div (<anonymous>)
    at div (<anonymous>)
    at div (<anonymous>)
    at Slider (index.js:8:1)
    at section (<anonymous>)
    at main (<anonymous>)
    at Page (index.js:16:1)
    at DataProvider (index.js:19:1)
    at App (<anonymous>)
overrideMethod	@	hook.js:608
printWarning	@	react-dom.development.js:86
error	@	react-dom.development.js:60
warnOnInvalidKey	@	react-dom.development.js:15124
reconcileChildrenArray	@	react-dom.development.js:15163
reconcileChildFibers	@	react-dom.development.js:15657
reconcileChildren	@	react-dom.development.js:19916
updateHostComponent$1	@	react-dom.development.js:20658
beginWork	@	react-dom.development.js:22373
beginWork$1	@	react-dom.development.js:27219
performUnitOfWork	@	react-dom.development.js:26392
workLoopSync	@	react-dom.development.js:26303
renderRootSync	@	react-dom.development.js:26271
performConcurrentWorkOnRoot	@	react-dom.development.js:25577
workLoop	@	scheduler.development.js:266
flushWork	@	scheduler.development.js:239
performWorkUntilDeadline	@	scheduler.development.js:533



## Plan de Test 

 - [] Aller dans ReactDevTools et analyser les differents composant leur comportement..
 - Corriger les warning de la console
 - [] Lancer les tests unitaires
 - [] Noter les tests qui échouent
 - [] Corriger chaque bugs identifiés
 - [] Valider les corrections de bugs

 ## Suivi des corrections :

 ## Bug #1.1 - Slider :
 - Localisation : Slider/index.js

- problème  dans le timeout du slider a corriger ( l'index peut dépasse la longueur du tableau, pas de tableau de dependans ce ce qui provoque l'affichage d'une slide blanche, à corriger)
 - Description :
   - Tri incorrect des événenments
   - les boutons radio n'indique pas sur quelle slide on se trouve au défilement des slides (ilsn'ont pas de gestionnaire d'eveneme,ts, ) = pbs de pagination
   - une slide ce s'affiche pas (un blanc apparaît)

 - Correction : 
   - Tri : 
   - Indiquer sur quelle slide on se trouve 
   - Faire apparaitre la slid qui ne s'affiche pas ou ne pas afficher de slid inutiles (une slide ce s'affiche pas (un blanc apparaît))


## 1. Correction du Slider

### Localisation
- Fichier: `src/containers/Slider/index.js`

### Description du problème
1. Tri incorrect des événements
2. Les boutons radio n'indiquaient pas la slide active lors du défilement
3. Une slide ne s'affichait pas correctement (un blanc apparaissait)

### Processus de débogage
1. **Analyse du problème** :
   - La logique de tri des événements était incorrecte
   - Les boutons radio n'avaient pas de gestionnaire d'événements pour la pagination
   - L'index du slider pouvait dépasser la longueur du tableau

2. **Solutions appliquées** :
   - Réécriture de la logique de tri des événements
   - Ajout d'un gestionnaire d'événements pour les boutons radio
   - Correction de la logique de défilement automatique

### Corrections apportées

```javascript
// Ancien code
const byDateDesc = data?.focus.sort((evtA, evtB) =>
  new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
);

// Nouveau code
const byDateDesc = data?.focus ? [...data.focus].sort((evtA, evtB) => {
  const dateA = new Date(evtA.date);
  const dateB = new Date(evtB.date);
  return dateB - dateA;  // Tri du plus récent au plus ancien
}) : [];

// Ajout d'un useEffect pour gérer le défilement automatique
useEffect(() => {
  const timer = setTimeout(() => {
    setIndex((prevIndex) => 
      prevIndex < (byDateDesc.length - 1) ? prevIndex + 1 : 0
    );
  }, 5000);

  return () => clearTimeout(timer);
}, [index, byDateDesc.length]);

// Ajout d'un gestionnaire d'événements onChange, pour les boutons radio
<input
  key={dot.id}
  type="radio"
  name="radio-button"
  checked={index === radioIdx}
  onChange={() => setIndex(radioIdx)}
/>
### Validation
✅ Les événements sont correctement triés du plus récent au plus ancien
✅ Les boutons radio indiquent correctement la slide active
✅ Toutes les slides s affichent correctement sans blanc


 ## Bug #1.2 - Style du Logo incorrect

### Localisation
- Fichiers concernés :
  - `src/components/Logo/index.js`
  - `src/components/Logo/style.scss`

### Description du problème
1. Style du texte incorrect dans le SVG
2. Dégradé de couleur manquant
3. Police de caractère mal appliquée

### Processus de débogage
1. **Analyse du problème** :
   - Les styles étaient écrits en CSS standard au lieu du format JSX dans le composant `Logo`
   - Le dégradé n'était pas appliqué correctement
   - Les variables de couleur du projet n'étaient pas utilisées

2. **Identification des solutions** :
   - Conversion des styles en format JSX dans le composant ReactLogo
   - import de ../colors.scss pour utiliser les variables de couleur
   - Utilisation des variables SCSS du projet (`$primary`)
   - Application du dégradé avec `background-clip: text`
   - ajout du cursor :pointer sur le logo

### Corrections apportées

1. **Dans `Logo/index.js`** :
   - Ajout de la classe `Logo__text` pour le texte SVG
   - Suppression des styles inline pour une meilleure maintenabilité

2. **Dans `Logo/style.scss`** :
   ```scss
   @import "src/colors.scss";

   .Logo {
     margin: 22px;
     cursor: pointer;

     &__text {
       font-family: "Kalimati", sans-serif;
       font-size: 39px;
       font-weight: 700;
       white-space: pre;
       background: linear-gradient(to right, darken($primary, 10%), $primary);
       background-clip: text;
       -webkit-background-clip: text;
       -webkit-text-fill-color: transparent;
       color: transparent;
     }
   }  
     ```

### Validation des corrections

✅ Police Kalimati correctemnt appliquée
✅ Dégradé de couleur correctement appliqué
✅ Cursor correctement appliqué
✅ Styles correctement appliqués dans le fichier style.scss, et syle plus maintenable grâce aux variables scss du projet

## justification technique 

- Utilisation des variables scss du projet pour la cohérence des couleurs
- Application des bonne pratiques React pour le style
- Respect du DRY

## Bug #1.3 - Liens de navigation non fonctionnels

### Localisation
- Fichiers concernés :
  - `src/pages/Home/index.js`
  - `src/containers/Menu/index.js`

### Description du problème
Les liens dans la barre de navigation ne redirigent pas vers les sections correspondantes :
- Le lien "Nos services" ne renvoie pas à la section Services
- Le lien "Nos réalisations" ne renvoie pas à la section Réalisations
- Le lien "Notre équipe" ne renvoie pas à la section Équipe

### Processus de débogage
1. **Analyse du problème** :
   - Les liens dans le menu utilisent des ancres (href="#nos-services", etc.)
   - Les sections dans la page n'avaient pas les IDs correspondants
   - Les liens étaient correctement définis mais n'avaient pas de cible

2. **Identification de la solution** :
   - Ajouter les IDs manquants aux sections correspondantes
   - S'assurer que les IDs correspondent exactement aux href des liens

### Corrections apportées

Dans `pages/Home/index.js` :
```jsx
<section className="ServicesContainer" id="nos-services">
<section className="EventsContainer" id="nos-realisations">
<section className="PeoplesContainer" id="notre-equipe">
```

### Validation des corrections

✅ Le clic sur "Nos services" renvoie à la section Services
✅ Le clic sur "Nos réalisations" renvoie à la section Réalisations 
✅ Le clic sur "Notre équipe" renvoie à la section Équipe

### Justification technique 
- Utilisation des ancres HTML standard pour la navigation intra-page
- Repect des conventions de nommages
- Solutions simple et performante

## Correction de l'affichage des mois dans le Slider et les EventCards

### Localisation
- Fichiers concernés :
  - `src/helpers/Date/index.js`
  - `src/components/EventCard/index.js`
  - `src/containers/Slider/index.js`

### Description du problème
Les mois n'étaient pas correctement affichés dans le slider et les EventCards. L'index des mois commençait à 0 (janvier = 0) alors que l'objet MONTHS utilisait des clés commençant à 1.

### Processus de débogage
1. **Analyse du problème** :
   - La fonction `getMonth` dans `helpers/Date/index.js` retournait un index de mois décalé
   - Les composants utilisant cette fonction affichaient donc des mois incorrects

2. **Solution appliquée** :
   - Modification de la fonction `getMonth` pour ajouter 1 à l'index du mois
   - Vérification et ajustement de l'utilisation de cette fonction dans les composants concernés

### Corrections apportées

Dans `src/helpers/Date/index.js` :
Commençais a 1 au lieu de zéro, correction à la source pour une solution globale, (a corriger le slide où il manquait un month et les eventCard où les months ne s'affichait pas)

```javascript
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
```

Dans src/components/EventCards/index.js :
```javascript
// verification de la date est bien un objet Date, verification du type afin d'assurer la compatibilité
const eventDate = date instanceof Date ? date : new Date(date);
// ... reste du code 
<div className="EventCard__month">{getmonth(eventDate)} </div>
```

### Validation
✅ Les mois s'affichent correctement dans le slider
✅ Les mois s'affichent correctement sur les EventCards
✅ La cohérence est maintenue entre tous les composants utilisant l'affichage des mois

### Justification technique

- Correction à la source dans la fonction helper pour une solution globals
- Vérification du type de date dans EventCards pour assurer la compatibilité
- Utilisation cohérente de la fonction getMonth à travers l'application


## 🐛 Correction du filtrage des evenement dans la section 'Nos réalistion', composant Select, events, pagination
### Localisation
- Fichiers concernés :
  - `src/containers/Events/index.js`
  - `src/containers/Select/index.js`  
### Problème
Le filtrage des événements ne fonctionnait pas correctement dans l'application. Les événements n'étaient pas filtrés selon le type sélectionné et la pagination était défectueuse.

### Symptômes
1. Le menu déroulant de sélection ne transmettait pas la valeur sélectionnée
2. Les événements restaient identiques quel que soit le type sélectionné
3. La pagination ne se réinitialisait pas lors du changement de type

## 🔍 Analyse du Code

### 1. Composant Select
**Problème détecté :**
```javascript
// Ancien code problématique
const changeValue = (newValue) => {
  onChange();   // Ne transmettait pas newValue
  setCollapsed(newValue);  // Utilisait une valeur au lieu d'un booléen
};

**Solution appliquée : **
```javascipt
// nouveau code :
const changeValue = (newValue) => {
  onChange(newValue);  // Transmet la nouvelle valeur
  setValue(newValue);
  setCollapsed(false); // Utilise un booléen
};
```

### 2. Composant Events
**Problème : **
```javascript
// Ancien code problématique
// Ancien code problématique
const filteredEvents = (
  (!type ? data?.events : data?.events) || []
).filter((event, index) => {
  // Logique de pagination avant filtrage = incorrect
});

```
**Solution appliquée :**
```javascript
// Nouveau code :
const filteredEvents = (data?.events || [])
  .filter((event) => {
    // 1. Filtrage par type
    const matchesType = !type || event.type === type;
    return matchesType;
  })
  .filter((_, index) => {
    // 2. Pagination après filtrage
    const start = (currentPage - 1) * PER_PAGE;
    const end = start + PER_PAGE;
    return index >= start && index < end;
  });
```



### 📊 Tests Effectués
Test du Select :
✅ La sélection d'un type met à jour correctement l'état
✅ Le menu se ferme après sélection
✅ La valeur est correctement transmise au parent
Test du Filtrage :
✅ Les événements sont correctement filtrés par type
✅ La pagination fonctionne sur les événements filtrés
✅ Le compteur de pages est exact

