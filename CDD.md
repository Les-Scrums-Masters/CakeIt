# Document de travail T4

Projet : **PEC22 : Producteurs et consommateurs : les mécanismes du marché face aux changements de contexte**

| Rédacteurs :     |
| ---------------- |
| Derya AY         |
| Eren CEYLAN      |
| Franck GUTMANN   |
| Clément NOGUEIRA |

## Description des objectifs pédagogiques du jeu

### Objectif pédagogique général

Comment les mécanismes du marché influent sur les décisions des producteurs face aux circonstances extérieures.

### Description des objectifs pédagogiques

Les détails de ce que le joueur doit apprendre.

Selon la théorie, sur un marché en CPP, le prix des biens est fixé par un équilibre entre offre et demande. L’offre s’adapte à la demande et vice-versa, et ces derniers peuvent impacter l’évolution du prix et du volume de production.
L’équilibre entre l’offre et la demande peut être modifié par des chocs, ce sont des évènements extérieurs qui viennent régulièrement impacter l’offre ou la demande. Ces changements violents ont le pouvoir de créer un bouleversement au plan économique.
Il y a deux types de conséquences, qui peuvent à la fois être positives ou négatives :

- Choc sur la demande : peur de la pénurie entraîne une hausse de la demande ou un scandale sur l'hygiène d’une industrie fait chuter la demande.
- Choc sur l’offre : pénuries entraînent une augmentation du prix des matières premières (négatif) ou innovation permettant une meilleure productivité (positif).

## Description de l’Unité d’Enseignement 1

**Description de la connaissance 1**

#### Marché :

- Le marché est un lien fictif où se rencontrent l’offre et la demande.

#### Mécanismes du marché

- Les prix des produits : quand le prix augmentent, la demande diminue
- Le revenu du consommateur : quand le revenu augmente, la demande diminue.
- Les goûts car les consommateurs ont des préférences

#### Choc de l’offre :

- La notion de choc de l’offre désigne une variation importante et imprévue des conditions de production qui affecte les producteurs.
- Elle modifie les coûts de production des biens et se traduit par une variations des prix demandés par les entreprises. On peut aussi parler de choc de prix.
- Les chocs d’offre ou/et de demande peuvent générer des périodes d’expansion (choc positif) ou provoquer des crises économiques (choc négatif).

## Description du jeu

**Type de jeu** : Gestion
Incarnation du joueur : Un boulanger

**Déroulement d’une partie**

Description du déroulement d’une partie : début, déroulement et fin\*\*

Nous avons créé un jeu multijoueur. Les joueurs incarnent des boulangeries en concurrence. Les boulangeries ne vendent qu’un seul produit : des gâteaux aux chocolats.
Les habitants de ce monde merveilleux ne peuvent pas vivre bien longtemps sans gâteaux aux chocolats.

Pour chaque tour, le joueur peut modifier le prix et le volume de production.
La seule information qu’ils peuvent connaître de leur concurrent est le prix à laquelle ils commercialisent leurs gâteaux. Les jours se déroulent, et les ventes se font toutes seules …

Chaque matin, les boulangers peuvent consulter leurs résultats et peuvent adapter leurs paramètres s'ils le souhaitent. Et certains jours, une ou plusieurs actualités surviennent.
A ce moment-là, les boulangeries mettent en pause leur production et analysent les évolutions du prix des matières premières, ou un changement de la demande des consommateurs. Et d’après ces paramètres, les différentes boulangeries adaptent ou non leur prix et leurs volumes de production. Les joueurs ont un temps limité pour effectuer des changements s’ils le souhaitent. Un tour dure 1 seul jour. Le jeu se termine au bout de 15 tours. Et le boulanger ayant le plus grand profit gagne le jeu.

## Paramétrage d’une partie

Description des options permettant de paramétrer une partie.

- Nombre de joueur : 2-X joueurs, chacun joue sur son appareil
- Chaque joueur est en concurrence avec tous les autres
- Nom du joueur
- Numéro du salon s’il souhaite jouer à plusieurs
- Nombre de tours : 10 tours de jeu avec 1 tour correspondant à 1 jour

- Prix initial des matières premières
- Prix initial et volume de vente initial

## Modèle conceptuel applicatif

Voici notre diagramme de classe décrivant notre jeu :
