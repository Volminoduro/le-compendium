(function(){
    var data = {
        "cartes":[
            {
                "edition":"",
                "nom":"Collecteur de chair",
                "type":"steuf leg",
                "illustration":"./Images/Consommables/miel.jpg",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"2"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"",
                        "effet":[
                            {"contenu":"Une attaque réussie sur un <perso>Personnage</perso> réduit son nombre de <blessure-icon></blessure-icon> maximale de 1."},
                            {"contenu":"Le <perso>Personnage</perso> affecté par ce passif ne peut pas avoir ces blessures réduites en-dessous de 1."}
                        ]
                    }    
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Chat Pardeur",
                "type":"steuf rare",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<accessoire-icon></accessoire-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"3"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Ennui espiègle",
                        "effet":[
                            {"contenu":"A la fin de votre tour, lancez le <d4-icon></d4-icon>"},
                            {"contenu":"Si le résultat est pair, piochez un <conso-icon></conso-icon> Sinon, défaussez-vous d'une carte de votre choix."}
                        ]
                    }    
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Tyler Durden",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Trouble de l'identité",
                        "effet":[
                            {"contenu":"Durant votre <i>début de tour</i>, retournez cette carte."},
                            {"contenu":"Vos blessures actuelles restent inchangées."},
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Anticonformisme... conformiste",
                        "effet":[
                            {"contenu":"+1 <atk-icon></atk-icon> lorsque vous attaquez un <perso>Personnage</perso> dont le total d'<or-icon></or-icon> des <steuf-icon></steuf-icon> équipés est supérieur au votre."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Dur à cuire",
                        "effet":[
                            {"contenu":"Une attaque est réussie contre vous que si la différence entre l'attaque et la défense ≥ 3"}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Sebastian",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Trouble de l'identité",
                        "effet":[
                            {"contenu":"Durant votre <i>début de tour</i>, retournez cette carte."},
                            {"contenu":"Vos blessures actuelles restent inchangées."},
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Se passer un savon",
                        "effet":[
                            {"contenu":"Lorsqu'un <perso>Personnage</perso> vous attaque, vous pouvez empêcher l'attaque en vous infligeant une <blessure-icon></blessure-icon>"},
                            {"contenu":"Ne peut être fait lorsque vous êtes au <sdm-icon></sdm-icon>"},
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Culpabilisation rentière",
                        "effet":[
                            {"contenu":"Lorsque vous avez 4 <blessure-icon></blessure-icon> ou plus, vous pouvez procéder à un 1 <b>Paiement</b> gratuit par tour."}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<ordre-neutre-icon></ordre-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Transfert de corps",
                        "effet":[
                            {"contenu":"Utilisable que lors de votre première phase d'action et si vous n'avez aucune <blessure-icon></blessure-icon>."},
                            {"contenu":"Echangez votre carte <perso>Personnage</perso> et les carte <steuf-icon></steuf-icon> équipés contre celles d'un autre <perso>Personnage</perso> à portée."},
                            {"contenu":"Votre tour s'achève après avoir effectué cette action."},
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<ordre-neutre-icon></ordre-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Coeur de pierre",
                        "effet":[
                            {"contenu":"Les <soin>soins</soin> n'ont aucun effet sur vous."},
                            {"contenu":"Vous ne pouvez augmenter votre nombre maximal de <blessure-icon></blessure-icon>"}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Bourreau des coeurs",
                        "effet":[
                            {"contenu":"Si votre attaque réussie amène un <perso>Personnage</perso> au <sdm-icon></sdm-icon>"},
                            {"contenu":"Mettez votre marqueur de <blessure-icon></blessure-icon> à 0."}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Doppelganger",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<ordre-neutre-icon></ordre-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Métamorphose spontanée",
                        "effet":[
                            {"contenu":"Lors de votre <i>début de tour</i>, votre <perso>Personnage</perso> gagne les <actif-icon></actif-icon> et les <passif-icon></passif-icon> d'un autre <perso>Personnage</perso> révélé de votre choix."},
                            {"contenu":"Votre <b>Moralité</b> et votre <b>Ordre</b> sont remplacés par ceux du <perso>Personnage</perso> choisi."},
                            {"contenu":"Vous ne pouvez sélectionner le même <perso>Personnage</perso> deux fois de suite."}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Maure-Vivian",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"",
                        "montant":"",
                    },
                    {
                        "nature":"",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"En sursis",
                        "effet":[
                            {"contenu":"Les <soin>soins</soin> n'ont aucun effet sur vous."},
                            {"contenu":"Vous ne pouvez augmenter votre nombre maximal de <blessure-icon></blessure-icon>"},
                            {"contenu":"Si vous êtes au <sdm-icon></sdm-icon> à votre <i>début de tour</i> :",
                            "enfants":[
                                {"contenu":"Vous avez 0 <blessure-icon></blessure-icon>"},
                                {"contenu":"Votre nombre maximal de <blessure-icon></blessure-icon> est réduit de 1."},
                                {"contenu":"Les <blessure-icon></blessure-icon> maximales réduitent ne peuvent aller en-dessous de 1."}
                            ]}
                        ]
                    }
                ],
                "citation":"« Oui, il a eu droit à des blagues sur sa situation et son prénom-composé durant toute sa scolarité.»"
            },
            {
                "edition":"",
                "nom":"",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Indulgence commerçante",
                        "effet":[
                            {"contenu":"Défaussez-vous de 5 <or-icon></or-icon> pour utiliser <b>Indulgence commerçante</b>."},
                            {"contenu":"Tous les <perso>Personnages</perso> sur une case <lieu-icon></lieu-icon> sont <soin>soignés</soin> de 1 <blessure-icon></blessure-icon>"}
                        ]
                    },
                    {
                        "nature":"actif",
                        "nom":"Messe démoniaque",
                        "effet":[
                            {"contenu":"<blessure>Subissez</blessure> 1 <blessure-icon></blessure-icon> pour utiliser <b>Messe démoniaque</b>."},
                            {"contenu":"Tous les <perso>Personnages</perso> sur une case <lieu-icon></lieu-icon> sont <blessure>blessés</blessure> de 1 <blessure-icon></blessure-icon>"}
                        ]
                    }
                ],
                "citation":"« Attendre du secours d'une seule divinité est une erreur digne d'un parieur débutant.»"
            },
            {
                "edition":"",
                "nom":"",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Intrication",
                        "effet":[
                            {"contenu":"Vous pouvez choisir un autre <perso>Personnages</perso> à portée."},
                            {"contenu":"Jusqu'au début de votre prochain tour :",
                            "enfants":[{"contenu":"Les <blessure-icon></blessure-icon>, <soin-icon></soin-icon> et les effets subits par le <perso>Personnages</perso> ciblé vous sont aussi infligés et inversement."}]}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Marchand de mort",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<loyal-icon></loyal-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Cadeau empoisonné",
                        "effet":[
                            {"contenu":"Vous pouvez donner une ou plusieurs de vos cartes en main au <perso>Personnages</perso> de votre choix."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Brûle-doigts",
                        "effet":[
                            {"contenu":"Lors d'une attaque réussie."},
                            {"contenu":"Vous infligez une <blessure-icon></blessure-icon> supplémentaire pour chaque carte dans la main du défenseur."}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"",
                "nom":"Dimirtri, le magicien",
                "type":"perso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<loyal-icon></loyal-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"« Tuto pour 1 »",
                        "effet":[
                            {"contenu":"Payez 2 <blessure-icon></blessure-icon>, ne peut être fait au <sdm-icon></sdm-icon>."},
                            {"contenu":"Prenez la carte de votre choix dans la pile de votre choix. Mélangez la pile."},
                            {"contenu":"Placez secrètement cette carte parmi les 3 premières de la pile, à la position de votre choix."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Remue-méninges permanent",
                        "effet":[
                            {"contenu":"A chaque fois que vous piochez une carte."},
                            {"contenu":"Piocher trois cartes au lieu d'une, choisissez-en une et reposez les deux autres sur la pile dans l'ordre de votre choix."}
                        ]
                    }
                ],
                "citation":"« Il sait brasser des cartes, tricher avec des dés ou une pièce et dit des choses qui n'intéresse personne. Selon lui, ça suffit à faire de lui un magicien. Exaspérant. Et pourquoi se costumer comme ça...? »"
            },
            {
                "edition":"",
                "nom":"Popotov",
                "type":"conso",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<conso-icon></conso-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"1",
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Odeur pestinentielle",
                        "effet":[
                            {"contenu":"Choisissez une case de votre choix, jusqu'à la fin de votre prochain tour:"},
                            {"contenu":"Chaque <perso>Personnage</perso> qui finit son tour sur cette case subit 1 <blessure-icon></blessure-icon> s'il n'est pas au <sdm-icon></sdm-icon>."},
                            {"contenu":"Mettez le <conso>Popotov</conso> sous la case concernée tant que son effet est actif."}
                        ]
                    }
                ],
                "citation":"« Un tiers de popo, un tiers de bouteille, un tier de lancer pour un résultat 100 % magique ! »"
            },
            {
                "edition":"",
                "nom":"Vraie fausse baguette de sourcier",
                "type":"steuf",
                "illustration":"./Images/Consommables/",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"1",
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Redéfinition du résultat attendu",
                        "effet":[
                            {"contenu":"Utilisable lors de votre <i>phase de déplacement</i>."},
                            {"contenu":"Lorsque vous arrivez sur la Case de votre destination, inversez votre tuile Case avec celle qui lui est opposée de l'autre côté du plateau."},
                            {"contenu":"Puis activer normalement la tuile Case où vous vous trouvez."}
                        ]
                    }
                ],
                "citation":"«  »"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()