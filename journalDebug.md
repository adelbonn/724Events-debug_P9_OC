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