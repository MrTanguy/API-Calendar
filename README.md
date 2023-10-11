# api-calendar

Cette API sous forme de librairie permet de générer un calendrier pour un mois et une année donnée.
L'API retourne une string sous forme code html contenant la balise table.

## Import

### Initialiser son projet sous node 

`npm init -y`

Cela devrait créer le fichier **package.json**. Veiller à éditer le fichier avec vos paramètres, notamment votre fichier main.

### Installer la dépendance

`npm install https://github.com/MrTanguy/api-calendar.git#dev`

Le fichier **package-lock.json** et le dossier **node_modules** contenant **api-calendar** devraient apparaître.

## Utilisation 

Pour récupérer la fonction getAllDaysOfMonth : 
`let getAllDaysOfMonth = require('api-calendar');`

Pour utiliser la fonction getAllDaysOfMonth, qui veut en entrée un mois (0 : Janvier, 11 : Décembre) et une année.
`let allDaysOfMonth = getAllDaysOfMonth(month, year);`

En sortie, la fonction retourne un string contenant tout un table html
