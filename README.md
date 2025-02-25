# 724 Events - Débogage d'Application React

## 📋  Description

Ce projet consiste en le débogage et la finalisation d'un site vitrine one-page pour l'agence événementielle 724Events.
Le site présente les services, les réalisations, et l'équipe de l'agence.

### 🎯 Objetcifs du projet

- Identification et correction des bugs existants
- Finalisation des fonctionnalités manquantes
- Rédaction d'un cahier de recette complet
- Documentation du processus de déboggage

## 🐛 Bugs Identifiés et Corrigés

1. **Carrousel d'événements**
   - ✅ Correction du tri chronologique (affichage par date décroissante)
   - ✅ Optimisation de l'affichage des événements
   - ✅ Correction de la pagination des slides
   - ✅ Correction de slide inutile affiché (blanc) 
   - ✅ Correction du slider (index)


2. **Section "Nos Réalisations"**
   - ✅ Implémentation du système de filtrage par mois
   - ✅ Correction du tri par catégories dans le collapse de la section 'Nos réalisations'
   - ✅ Correction de l'affichage de la date et du type de l'évenements affiché dans les EventsCard
   

3. **Formulaire de Contact**
   - ✅ Correction de l'affichage du message de confirmation après envoi
   - ✅ Validation des champs du formulaire

4. **Footer**
   - ✅ Correction de l'affichage du dernier événement dans la Card du footer
   - ✅ Correction de l'affichage de la date et du type de l'évenements affiché dans la card du footer (lié aux autres EventsCard)
   


5. **Autres Corrections**
   - ✅ Correction des bugs identifiés via les tests
   - ✅ Correction des ancres dans la barre de navigation
   - ✅ Correction du style du logo (font, couleur, etc.)
   - ✅ Ajout du favicon
   - ✅ Ajout du titre de la page
   - ✅ Correction des liens des icônes des réseaux sociaux
   - ✅ Re-rendu corrigé performance améliorée
   - ✅ Correction de la validation des champs du formulaire via attributs natifs HTML5
   



## 🧪 Tests et Validation

### Tests Existants

- ✅ Tests unitaires des composants
- ✅ Tests d'intégration
- ✅ Couverture de code complète

### Outils de Débogage Utilisés

- React Developer Tools pour l'analyse de l'architecture
- Chrome DevTools pour le débogage
- Tests automatisés pour la validation
- Debugging Tools pour le débogage

### Documentation de Test

- `journalDebug.md` : Documentation détaillée des corrections
- `cahierDeRecette.pdf` : Validation des fonctionnalités


## 📈 Améliorations Futures Possibles

- Implémentation de tests unitaires supplémentaires (3 prévus)
- Ajout de tests d'intégration additionnels (3 prévus)
- Amélioration continue de la couverture de code

## 💻 Pre-requis

- NodeJS  >= v16.14.1
- Yarn (version ≥ 1.22.15)

## ⚙️ Installation

``bash
# Cloner le repository
git clone [https://github.com/adelbonn/724Events-debug_P9_OC]

# Se placer dans le dossier
cd 724-events

# Installer les dépendances
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

