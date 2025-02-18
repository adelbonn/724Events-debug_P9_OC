# Jouranl de debug - 724Events

## Bugs Identifiés

1. Section du header :

1.1 Slider  : 

    - Tri incorrect des événenments
    - les boutons radio n'indique pas sur quelle slide on se trouve au défilement des slides
    - un slide ce s'affiche pas correctement(un blanc apparaît)

1.2 Logo :

     - pas de cursor pointer sur le logo

1.3 Les boutons de la navbar : 

     - le bouton : 'Nos services ne renvoi pas la section 'Nos services'
     - le bouton 'Nos réalisations' ne renvoi pas à la section 'Nos          réalisations'
     - le boutons 'Notre équipe ne renvoie pas à la section 'Notre équipe'

2. Section ' Nos réalisations ' :

2.1 Filtre des réalisations : 

    - non fonctionnel (ils doivent afficher les réalisations selon le filtre adapté (ex: Conférence doit afficher les conférences, ...))

2.2 Modale :

    - ne se ferlme pas lorsque l'utilisateur clique en dehors de la modal
    - la liste des événenements ne semble pas afficher les bons mois et certains reste vide

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
     
     - trouver et corriger les typs (dans le fichier index.js) de :
       - logo les style ne sont pas écrit  en jsx mais en css c'est pour cela que cela ne focntionne pas


## Plan de Test 

 - [] Lancer les tests unitaires
 - [] Noter les tests qui échouent
 - [] Corriger chaque bugs identifiés
 - [] Valider les corrections de bugs

 ## Suivi des corrections :

 ## Bug #1.1 - Slider :
 - Localisation : Slider/index.js

 - Description :
   - Tri incorrect des événenments
   - les boutons radio n'indique pas sur quelle slide on se trouve au défilement des slides
   - une slide ce s'affiche pas (un blanc apparaît)

 - Correction : 
   - Tri : 
   - Indiquer sur quelle slide on se trouve 
   - Ne pas afficher les slides inutiles (une slide ce s'affiche pas (un blanc apparaît))

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

### Validation des corrections

✅ Le clic sur "Nos services" renvoie à la section Services
✅ Le clic sur "Nos réalisations" renvoie à la section Réalisations 
✅ Le clic sur "Notre équipe" renvoie à la section Équipe

### Justification technique 
- Utilisation des ancres HTML standard pour la navigation intra-page
- Repect des conventions de nommages
- Solutions simple et performante

