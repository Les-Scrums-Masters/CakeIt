export const INITIAL_PRICES = {
    butter: 1.0,
    chocolate: 2.0,
    sugar: 0.5,
    flour: 1.0,
    egg: 0.7,
}

export const INITIAL_CLIENTS = {
    // Proportion de nos clients (doit être à 100% au total)
    poor: 20.0,
    middle: 70.0,
    rich: 10.0,
    request_by_player: 150.0, // Le nombre de client par joueur
}

export const NEWS = [
    {
        "name": "Un plan de relance économique est en marche.",
        "descriptions": "En effet, suite à de nombreux évènements,le gouvernement a décidé d'injecter, pour relancer l'économie du pays, 100 milliards d'euros dans de nombreux domaines tel que l'écologie, la compétitivité et la cohésion.",
        "multipliers": {
            "egg": 1.0,
            "chocolate": 1.0,
            "butter": 1.0,
            "sugar": 1.0,
            "flour": 1.1,
            "demande": 1.1
        }
    },
    {
        "name": "La banque centrale lance le Quantitative Easing !",
        "descriptions": "Suite aux nombreuses crises qu'a subi le pays, la banque centrale décida d'acheter massivement des actifs financiers. En effet, ce procédé peu commun nommé \"assoplissement quantitatif\" ou encore \"quantitative easing\" pourrait permettre de relancer l'activité et l'inflation.",
        "multipliers": {
            "egg": 1.1,
            "chocolate": 1.05,
            "butter": 1.05,
            "sugar": 1.05,
            "flour": 1.05,
            "demande": 1.1
        }
    },
    {
        "name": "France : pénurie d'oeufs dans tout le pays.",
        "descriptions": "En effet, une épidémie de peste aviaire a frappé l'entièreté du pays. L'état pense à une intoxication mené par un opposant politique dénommé Maurice. Une dizaine de millions de poules auraient succombés.",
        "multipliers": {
            "egg": 1.4,
            "chocolate": 1.0,
            "butter": 1.0,
            "sugar": 1.0,
            "flour": 1.0,
            "demande": 1.1
        }
    },
    {
        "name": "France : la Covid reprend du terrain !",
        "descriptions": "600 000 cas de la Covid 19 ont été recensé aujourd'hui en France, c'est un reccord international. Le président va-t-il prendre la décision de reconfiner au péril de l'économie Française ?",
        "multipliers": {
            "egg": 1.2,
            "chocolate": 1.2,
            "butter": 1.2,
            "sugar": 1.1,
            "flour": 1.1,
            "demande": 0.8
        }
    },
    {
        "name": "Un nouveau moyen de faire du chocolat ?!",
        "descriptions": "Un énorme gisement de chocolat a été trouvé dans le sud de la France! C'est une première dans le monde !",
        "multipliers": {
            "egg": 1,
            "chocolate": 0.7,
            "butter": 1.0,
            "sugar": 1.0,
            "flour": 1.0,
            "demande": 1.1
        }
    },
    {
        "name": "Un nouveau confinement ?",
        "descriptions": "Le covid est de retour ! Erkan Jeylan a annoncé officiellement un reconfinement dans tout le pays",
        "multipliers": {
            "egg": 1.1,
            "chocolate": 1.2,
            "butter": 1.2,
            "sugar": 1.1,
            "flour": 1.3,
            "demande": 1.1
        }
    },

    {
        "name": "Un nouveau confinement ?",
        "descriptions": "Le covid est de retour ! Erkan Jeylan a annoncé officiellement un reconfinement dans tout le pays",
        "multipliers": {
            "egg": 1.1,
            "chocolate": 1.2,
            "butter": 1.2,
            "sugar": 1.1,
            "flour": 1.3,
            "demande": 1.1
        }
    },

    {
        "name": "Le retour de la vache folle.",
        "descriptions": "Cette maladie datant de 1986 a touché environ 200 000 bovins cette semaine, elle est particulièrement contagieuse. Faites-attention à ce que vous mangez et buvez. ",
        "multipliers": {
            "egg": 1.0,
            "chocolate": 1.0,
            "butter": 1.3,
            "sugar": 1.0,
            "flour": 1.0,
            "demande": 0.8
        }
    },

    {
        "name": "Incendie criminel dans la plus grande usine sucrière du monde.",
        "descriptions": "Depuis des années, l'industrie du sucre est la moins touchée par les incendies criminels. Malheureusement, cette nuit a eut lieu le plus grand incendie criminel du monde. L'entièreté d'une usine de sucre située en Asie fut détruite.",
        "multipliers": {
            "egg": 1.0,
            "chocolate": 1.0,
            "butter": 1.0,
            "sugar": 1.3,
            "flour": 1.0,
            "demande": 0.8
        }
    },
    {
        "name": "Le spectre de la sécheresse plane déjà",
        "descriptions": "Le printemps est à peine commencé que la sécheresse affecte déjà plusieurs départements. ",
        "multipliers": {
            "egg": 1.0,
            "chocolate": 1.0,
            "butter": 1.0,
            "sugar": 1.0,
            "flour": 1.2,
            "demande": 0.9
        }
    },
    {
        "name": "Bricomarché cherche 1000 salariés",
        "descriptions": "Une enseigne de bricolage lance une publicité TV pour recruter des salariés. ",
        "multipliers": {
            "egg": 1.0,
            "chocolate": 1.0,
            "butter": 1.0,
            "sugar": 0.9,
            "flour": 1.0,
            "demande": 0.6
        }
    },
    {
        "name": "Nouvelle journée de grève dans les transports !",
        "descriptions": "Les syndicats ont déposé un préavis dans les transports en commun",
        "multipliers": {
            "egg": 1,
            "chocolate": 1.0,
            "butter": 0.8,
            "sugar": 0.8,
            "flour": 0.9,
            "demande": 1.1
        }
    }
]