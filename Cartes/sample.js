(function(){
    var data = {
        // Consommables
        "cartes":[
            {
                "collection":"conte",
                "nom":"Pomme d'or",
                "type":"conso",
                "illustration":"./Images/Consommables/pomme_or.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"8"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Protection divine",
                        "effet":{
                            "contenu":"Ciblez un <perso>Personnage</perso>, jusqu'à son prochain tour :",
                            "enfants":{"contenu":"Pendant chaque tour de chaque autre <perso>Personnage</perso> que la cible, jusqu'à une blessure est annulée."}
                        }
                    },
                    {
                        "nature":"passif",
                        "nom":"Pourriture terrestre",
                        "effet":[
                            {"contenu":"Après avoir utilisé <effet>Protection divine</effet>."},
                            {"contenu":"Sortez cette carte du jeu au lieu de la défausser."}
                        ]
                    }
                ],
                "citation":"Mangez cinq fruits et légumes par jour, c'est ce que disait le serpent"
            },
            {
                "collection":"conte",
                "nom":"Rune de téléportation",
                "type":"conso",
                "illustration":"./Images/Consommables/pierre_teleportation.jpg","caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"2"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"",
                        "effet":[
                            {"contenu":"Utilisable au début de votre <i>phase de déplacement</i>."},
                            {"contenu":"Au lieu de lancer les dés, déplacez vous sur la case de votre choix."}
                        ]
                    }
                ],
                "citation":"Cette fois-ci ça va fonctionner comme prévu. Vous allez pas vous retrouver aux premières loges de la conception de votre petit frère"
            },
            {
                "collection":"conte",
                "nom":"Ailes atrophiées",
                "type":"conso",
                "illustration":"./Images/Consommables/ailes_atrophiees.jpg","caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"A portée de moignon",
                        "effet":[
                            {"contenu":"Utilisable à tout moment."},
                            {"contenu":"Vous vous déplacez sur une case adjacente."},
                            {"contenu":"Si vous utilisez <conso>Ailes atrophiées</conso> en dehors de votre <i>phase de déplacement</i>, la case ne s'active pas."}
                        ]
                    }
                ],
                "citation":"Elles vous seront bien plus utiles qu'à la pauvre créature à qui vous les avez arrachées"
            },
            
            {
                "collection":"conte",
                "nom":"Poudre d'altération",
                "type":"conso",
                "illustration":"./Images/Consommables/poudre_perlimpinpin.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"0"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"On le voit, on le voit plus",
                    "effet":[
                        {"contenu":"Vous pouvez annuler un </actif-icon> ou un </passif-icon> d'un <steuf-icon></steuf-icon> équipé."},
                        {"contenu":"Cela durera tant qu'il sera équipé, placez <conso>Poudre d'altération</conso> sur l'<effet>effet</effet> affecté pendant cette durée."}
                    ]
                },
                "citation":"Personne n'est dupe, on sait tous que vous pensez à vous maquiller avec"
            },
            {
                "collection":"conte",
                "nom":"Piège à loup",
                "type":"conso",
                "illustration":"./Images/Consommables/piege_loup.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"6"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Anti-vol",
                        "effet":[
                            {"contenu":"Lorsqu'on tente de vous voler une carte en main."},
                            {"contenu":"Défaussez <conso>Piège à loup</conso> à la place. Le voleur subit 1 <blessure-icon></blessure-icon>"}]
                        }
                ],
                "citation":"Il y a ceux avec des oursins dans les poches et ceux qui prennent des mesures <u>vraiment</u> dissuasives"
            },
            {
                "collection":"conte",
                "nom":"Flacon de salive d'hydre",
                "type":"conso",
                "illustration":"./Images/Consommables/salive_hydre.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"3"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Blague décapante",
                    "effet":{
                        "contenu":"Selon la cible de votre choix : ",
                        "enfants":[
                            {"contenu":"Le <perso>Personnage</perso> ciblé subit 1 <blessure-icon></blessure-icon>"},
                            {"contenu":"Le <steuf-icon></steuf-icon> ciblé est défaussé."}
                        ]
                    }
                },
                "citation":"Cela dissout tout, sauf son flacon. Incompréhensible"
            },
            {
                "collection":"conte",
                "nom":"Coeur de drake",
                "type":"conso",
                "illustration":"./Images/Consommables/coeur_drake.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Revigoré",
                    "effet":[
                        {"contenu":"Jusqu'à votre prochain tour."},
                        {"contenu":"Toutes vos défenses réussies infligent 1 <blessure-icon></blessure-icon> à l'attaquant."}
                    ]
            }
                ,
                "citation":"Coeur de drake, pas Drake. On parle du poulet volant écailleux préhistorique cracheur de feu"
            },
            {
                "collection":"conte",
                "nom":"Potion de bras très-très-long",
                "type":"conso",
                "illustration":"./Images/Consommables/potion_bras_long.jpg",
                "caracteristiques":[
                    {"nature":"<or-icon></or-icon>","montant":"4"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Les yeux plus gros que les bras",
                    "effet":[
                        {"contenu":"Vous piochez 3 <steuf-icon></steuf-icon> puis défaussez-en 2 parmis ceux piochés."}
                    ]
                },
                "citation":"Ça serait pratique pour se lacer les chaussures sans se baisser, mais il n'y aurait plus de vêtement à votre taille"
            },
            {
                "collection":"conte",
                "nom":"Baobab en barbe-à-papa",
                "type":"lieu",
                "illustration":"./Images/Lieux/baobab.jpg",
                "caracteristiques":[
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Friandise généreuse",
                            "effet":[
                                {"contenu":"En commençant par le <perso>Personnage</perso> qui a découvert ce <lieu-icon></lieu-icon> puis dans l'ordre de jeu."},
                                {"contenu":"Chaque <perso>Personnage</perso> peut se <soin-icon></soin-icon> 1 <blessure-icon></blessure-icon>"},
                                {"contenu":"Lorsque 4 <blessure-icon></blessure-icon> ont été <soin-icon></soin-icon> ou que le <lieu>Baobab en barbe-à-papa</lieu> est passé par tous les <perso>Personnages</perso>, défaussez-le."}
                            ]
                        }
                ],
                "citation":"N'essayez pas d'y grimper, ni de vous y abriter par temps de pluie."
            },
            {
                "collection":"conte",
                "nom":"Cahutte de Bibi Yog'Yourte",
                "type":"lieu",
                "illustration":"./Images/Lieux/yourte.jpg",
                "caracteristiques":[
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Les produits laitiers",
                            "effet":[
                                {"contenu":"Vous contractez la <effet>Gaze'Trop</effet>, mettez <lieu>Cahutte de Bibi Yog'Yourte</lieu> sur l'emplacement <effet>effet</effet> pour le symboliser."},
                                {"contenu":"Tant que <effet>Gaze'Trop</effet> est actif sur un <perso>Personnage</perso>, ne défaussez pas <lieu>Cahutte de Bibi Yog'Yourte</lieu>."},
                            ]
                        },
                        {
                            "nature":"passif",
                            "nom":"Gaze'Trop",
                            "effet":[
                                {"contenu":"Au début de votre tour, subissez 1 <blessure-icon></blessure-icon>"},
                                {"contenu":"Quand vous <atk-icon></atk-icon> / <def-icon></def-icon>, votre <effet>Gaze'Trop</effet> va au défenseur / attaquant."},
                            ]
                        }
                ],
                "citation":"Le Yog'Yourte de Bibi, le produit laitier avec des vrais morceaux de yourte à l'intérieur !"
            },
            {
                "collection":"conte",
                "nom":"Planche au petit pieu",
                "type":"lieu",
                "illustration":"./Images/Lieux/planche_pieu.jpg",
                "caracteristiques":[
                ],
                "effets":[
                        {
                            "nature":"passif",
                            "nom":"Litterie inconfortable",
                            "effet":[
                                {"contenu":"Faites une <def-icon></def-icon>."},
                                {"contenu":"Si votre <def-icon></def-icon> < 3 :",
                                "enfants":[
                                    {"contenu":"Subissez 1 <blessure-icon></blessure-icon>"},
                                    {"contenu":"Piochez 2 <steuf-icon></steuf-icon>"}
                                ]}
                            ]
                        }
                ],
                "citation":"Vous ne vous plaindrez plus jamais de vous endormir avec un petit caillou au milieu du dos."
            },
            {
                "collection":"conte",
                "nom":"Antre du lion anémié",
                "type":"lieu",
                "illustration":"./Images/Lieux/caverne_lion.jpg",
                "caracteristiques":[
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Safari pour incompétents",
                            "effet":""
                        }
                ],
                "citation":"Il vous faisait pitié. Vous pourrez désormais porter sa fourrure pleine de puces fièrement sur vos épaules."
            },
            {
                "collection":"conte",
                "nom":"Caverne aux brigands",
                "type":"lieu",
                "illustration":"./Images/Lieux/caverne_brigand.jpg",
                "caracteristiques":[
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Féru de féraille",
                            "effet":[
                                {"contenu":"Vous pouvez piochez le <steuf-icon></steuf-icon> de votre choix dans la pile de défausse."}
                            ]
                        }
                ],
                "citation":"Camélia, ouvre toi ! Colza, ouvre toi ! Soja, ouvre toi ! Toujours pas..."
            },
            {
                "collection":"conte",
                "nom":"Gueule de Doby Mick",
                "type":"lieu",
                "illustration":"./Images/Lieux/gueule_moby_dick.jpg",
                "caracteristiques":[
                ],
                "effets":[
                ],
                "citation":"Qui aurait une très grosse brosse à dents ? On fait pas souvent le ménage là-dedans."
            },
            {
                "collection":"conte",
                "nom":"Gouffre mal signalé",
                "type":"lieu",
                "illustration":"./Images/Lieux/gouffre.jpg",
                "caracteristiques":[
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Vitesse et précipice",
                        "effet":[
                            {"contenu":"Si votre <i>jet de déplacement</i> était supérieur à 3.",
                            "enfants":[
                                {"contenu":"Vous vous défaussez d'un <steuf-icon></steuf-icon> de votre choix ou subissez une <blessure-icon></blessure-icon>"}
                            ]}
                        ]
                    }
                ],
                "citation":"A ce jour, on compte 214 accidents de selfies à cause de cette âbime."
            },
            {
                "collection":"conte",
                "nom":"Atelier d'assemblage du grand Solat",
                "type":"lieu",
                "illustration":"./Images/Lieux/atelier_solat.jpg",
                "caracteristiques":[
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Bouton rouge",
                        "effet":[
                            {"contenu":"Les <perso>Personnages</perso> à plus de 3 <blessure-icon></blessure-icon> sont <soin>soignés</soin> d'une <blessure-icon></blessure-icon>"},
                            {"contenu":"Les <perso>Personnages</perso> à moins de 3 <blessure-icon></blessure-icon> subissent une <blessure-icon></blessure-icon>"}
                        ]
                    }
                ],
                "citation":"Ce n'est pas votre faute si votre groupe est décédé, il y avait un bouton rouge. Il fallait appuyer dessus, 'comprenez ?"
            },
            {
                "collection":"conte",
                "nom":"Cacafarnaome",
                "type":"lieu",
                "illustration":"./Images/Lieux/cacafarnaome.jpg",
                "caracteristiques":[
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Égalitarisme tempétueux",
                        "effet":[
                            {"contenu":"Réunissez tous les <steuf-icon></steuf-icon> (équipés ou en main) en jeu et mélangez-les."},
                            {"contenu":"Redistribuez les <steuf-icon></steuf-icon> de manière à ce que tout le monde en ait le même nombre, puis défaussez ceux en trop."}
                        ]
                    }
                ],
                "citation":"«La propriété, c'est le vol» prends une toute autre mesure ici."
            },
            {
                "collection":"conte",
                "nom":"Arène du pugilisme",
                "type":"lieu",
                "illustration":"./Images/Lieux/arene_pugilisme.jpg",
                "caracteristiques":[
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Duel",
                        "effet":[
                            {"contenu":"Vous attaquez un autre <perso>Personnage</perso> de votre choix."},
                            {"contenu":"Ce <perso>Personnage</perso> pourra attaquer en retour."},
                            {"contenu":"Ceci n'est pas considéré comme une phase d'attaque de votre tour."},
                        ]
                    }
                ],
                "citation":"La première règle de l'arène du pugilisme est : il n'y a aucune règle. Aucun sens."
            },
            {
                "collection":"conte",
                "nom":"Bois du Gel-aux-dents",
                "type":"lieu",
                "illustration":"./Images/Lieux/bois_gel.jpg",
                "caracteristiques":[
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Cryptozoologue",
                        "effet":[
                            {"contenu":"Choisissez l'effet pour le reste de la partie :",
                            "enfants":[
                                {"contenu":"Jusqu'à votre prochain tour, les déplacements sont fait avec le dé à trois faces."},
                                {"contenu":"Jusqu'à votre prochain tour, les déplacements sont fait avec le dé à trois faces."},
                            ]}
                        ]
                    }
                ],
                "citation":"La première règle de l'arène du pugilisme est : il n'y a aucune règle. Aucun sens."
            },
            {
                "collection":"conte",
                "nom":"Mère Poule",
                "type":"perso",
                "illustration":"./Images/Personnages/mere_poule.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"La meilleure attaque",
                        "effet":[
                                {"contenu":"Vos <bonus-atk-icon></bonus-atk-icon> sont égaux à vos <bonus-def-icon></bonus-def-icon>"},
                                {"contenu":"Ne peut être augmenté par des <bonus-atk-icon></bonus-atk-icon>"}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Arrêtez de vous battez !",
                        "effet":[
                            {
                                "contenu":"Vous pouvez prendre la place d'un autre <perso>Personnage</perso> attaqué dans votre </portee-icon> pour vous défendre à sa place."
                            }
                        ]
                    }
                ],
                "citation":"Fière grande prédicatrice du saint-ordre de la paix entre tous les animaux de basse-cour, elle finit toujours ses phrases par «cot cot.»."
            },
            {
                "collection":"conte",
                "nom":"Sandrine",
                "type":"perso",
                "illustration":"./Images/Personnages/sandrine.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Bonne",
                        "effet":[
                            {
                                "contenu":"Vous pouvez piochez dans la défausse des <conso-icon></conso-icon> et <steuf-icon></steuf-icon> à la place des piles habituelles."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Le petit personnel",
                        "effet":[
                            {"contenu":"Une seule fois jusqu'à votre prochain tour."},
                            {"contenu":"Vous pouvez mettre une carte <conso-icon></conso-icon> ou <steuf-icon></steuf-icon> en dessous de la pile de pioche lors de sa défausse."}
                        ]
                    }
                ],
                "citation":"L'équipe du Compendium présente ses excuses auprès des autres joueurs si quelqu'un s'appelle Sandrine parmi eux."
            },
            {
                "collection":"conte",
                "nom":"L'enfant sauvage",
                "type":"perso",
                "illustration":"./Images/Personnages/enfant_sauvage.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Débrouillard à jamais",
                        "effet":[
                            {
                                "contenu":"Vous pouvez équiper vos <conso-icon></conso-icon> comme des <commun>Steufs communs</commun>.",
                                "enfants":[
                                    {"contenu":"Chaque <conso-icon></conso-icon> équipé vous confère +1 <bonus-atk-icon></bonus-atk-icon> et +1 <bonus-def-icon></bonus-def-icon>"}
                                ]
                            },
                            {
                                "contenu":"Ils peuvent encore être utilisés comme <conso-icon></conso-icon>"
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Le goûts des choses simples",
                        "effet":[
                            {
                                "contenu":"Vous ne pouvez équiper des <steuf-icon></steuf-icon> au-delà de la qualité <rare>Rare</rare>."
                            }
                        ]
                    }
                ],
                "citation":"Avec sa pomme dans la bouche, vous n'entendez que les voyelles."
            },
            {
                "collection":"conte",
                "nom":"Vassilisse",
                "type":"perso",
                "illustration":"./Images/Personnages/vassilisse.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Très-très-élégante",
                        "effet":[
                            {
                                "contenu":"La valeur en <or-icon></or-icon> de vos cartes est à 4 au minimum lorsque vous les <or>vendez</or>."
                            }
                        ]
                    },
                    {
                        "nature":"actif",
                        "nom":"Ami pas si imaginaire",
                        "effet":[
                            {
                                "contenu":"Lancez les deux dés, l'effet suivant sera pour tous les <perso>Personnages</perso> :",
                                "enfants":[
                                    {"contenu":"2 - 3 : tous les <soin-icon></soin-icon> d'une <blessure-icon></blessure-icon> soigneront deux <blessure-icon></blessure-icon>"},
                                    {"contenu":"4 - 5 : tous les <vol-icon></vol-icon> sont forcément réussis."},
                                    {"contenu":"6 - 7 : toutes les <def-icon></def-icon> réussies infligeront une <blessure-icon></blessure-icon> à l'attaquant."}
                                ]
                            }
                        ]
                    }
                ],
                "citation":"Non, en dépit de son incroyable chevelure, son nom n'est pas celui d'un modèle révolutionnaire de fer à lisser."
            },
            {
                "collection":"conte",
                "nom":"Le prince charmeur",
                "type":"perso",
                "illustration":"./Images/Personnages/prince_charmeur.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Feurst",
                        "effet":[
                                {"contenu":"Une attaque réussie à un <perso>Personnage</perso> non blessé inflige 2 <blessure-icon></blessure-icon>"}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Sourire désarmant",
                        "effet":[
                                {"contenu":"Lors de votre défense, l'<arme-icon></arme-icon> adverse n'est pas pris en compte."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Destinée",
                        "effet":[
                            {"contenu":"Si vous vous révelez dès le premier tour."},
                            {"contenu":"Vous pouvez piocher directement <commun>Coupe mulet de Djayzon</commun>, <epique>Cape miroitante</epique> et une <commun>Babouche de verre</commun>."}
                        ]
                    }
                ],
                "citation":"Il s'appelle Enzo, a une calèche toute option, se parfume au Jouve-en-chie et ne dit rien pour avoir l'air mystérieux."
            },
            {
                "collection":"conte",
                "nom":"Alice, au pays des sarouels",
                "type":"perso",
                "illustration":"./Images/Personnages/alice_sarouel.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Curiosité",
                        "effet":[
                            {
                                "contenu":"Vous regardez la première carte d'une des piles."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Morpho-psychologie très élastique",
                        "effet":[
                            {
                                "contenu":"Lorsque vous utilisez un <conso-icon></conso-icon>, lancez les deux dés.",
                                "enfants":[
                                    {"contenu":"Supérieur à 4 : +1 de portée pour vous et vos attaquants."},
                                    {"contenu":"Inférieur à 4 : -1 de portée pour vous et vos attaquants."}
                                ]
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"En plein délire",
                        "effet":[
                            {
                                "contenu":"Lorsque vous atteignez 3 <blessure-icon></blessure-icon> ou plus, transformez-vous en <perso>Alice, de l'autre côté du buvard</perso>."
                            }
                        ]
                    }
                ],
                "citation":"Elle vous parle d'une chenille fumant la chicha et d'un lapin lui volant son âme. N'importe quoi."
            },
            {
                "collection":"conte",
                "nom":"Alice, de l'autre côté du buvard",
                "type":"perso",
                "illustration":"./Images/Personnages/alice_buvard.jpg",
                "caracteristiques":[
                    {"nature":"<bon-icon></bon-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Curiosité",
                        "effet":[
                            {
                                "contenu":"Vous regardez la première carte d'une des piles."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Eclair de lucidité",
                        "effet":[
                            {
                                "contenu":"Seuls les <perso>Personnages</perso> avec autant de <blessure-icon></blessure-icon> que vous ou plus peuvent vous attaquer."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"En plein délire",
                        "effet":[
                            {
                                "contenu":"Lorsque vous atteignez 2 <blessure-icon></blessure-icon> ou moins, transformez-vous en <perso>Alice, au pays des sarouels</perso>."
                            }
                        ]
                    }
                ],
                "citation":"Voici la phonétique de ce qu'elle dit, débrouillez-vous avec le sens : ghtylemaoe ohikila mpooileenaiuy glhkylu thrrrkkfff, MARIUS."
            },
            {
                "collection":"conte",
                "nom":"Le Chevaucheur-Sans-Tête",
                "type":"perso",
                "illustration":"./Images/Personnages/cavalier_sans_tete.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Très bien comme il est",
                        "effet":
                            {"contenu":"Ne peut s'équiper de <corps-icon></corps-icon>"}
                    },
                    {
                        "nature":"passif",
                        "nom":"Déjà mort",
                        "effet":
                            {"contenu":"Vous pouvez toujours attaquer lorsque vous êtes au <sdm-icon></sdm-icon>"}
                    },
                    {
                        "nature":"passif",
                        "nom":"Destinée",
                        "effet":[
                            {"contenu":"Si vous vous révelez dès le premier tour."},
                            {"contenu":"Vous pouvez vous équiper du <rare>Fouet de Dullahan</rare> et <epique>Cheval Sans-Tête</epique> depuis la pile / défausse de <steuf-icon></steuf-icon>"}
                        ]
                    }
                ],
                "citation":"Avec le ton le plus sérieux du monde, il vous demandera l'adresse de votre coiffeur car il adore son travail."
            },
            {
                "collection":"conte",
                "nom":"Munazam",
                "type":"perso",
                "illustration":"./Images/Personnages/munazam.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"6"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Tout doit être régulé",
                        "effet":[
                            {
                                "contenu":"Choisissez deux <perso>Personnages</perso>. Défaussez leurs <steuf-icon></steuf-icon> équipés de manière à ce qu'ils aient le même total d'or le plus haut possible."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Rigueur robotique",
                        "effet":[
                            {
                                "contenu":"Votre valeur d'or de <steuf-icon></steuf-icon> équipé doit être pair à la fin de votre tour. Sinon défaussez-en jusqu'à ce que ça soit le cas."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"ArithmeticException",
                        "effet":[
                            {
                                "contenu":"Une fois au <sdm-icon></sdm-icon>, infligez une <blessure-icon></blessure-icon> à tous les autres <perso>Personnages</perso>."
                            }
                        ]
                    }
                ],
                "citation":"On l'a retrouvé dans un cagibi avec un écriteau indiquant : Allumez-moi, ceci n'est pas un piège du tout."
            },
            {
                "collection":"conte",
                "nom":"Galinette cendrée",
                "type":"perso",
                "illustration":"./Images/Personnages/faisan_feu.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"3"},
                    {"nature":"<attaque-icon></attaque-icon>","montant":"+1"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Calcination",
                        "effet":[
                            {"contenu":"A la fin de votre tour."},
                            {
                                "contenu":"Subissez une <blessure-icon></blessure-icon>",
                                "enfants":[
                                    {"contenu":"Si vous êtes au <sdm-icon></sdm-icon>, revenez à 0 <blessure-icon></blessure-icon> à la place."},
                                ]
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Pas de bras",
                        "effet":[
                            {"contenu":"Ne peut s'équiper d'<arme-icon></arme-icon>"}
                        ]
                    }
                ],
                "citation":"En l'occurence, cendrée n'est pas une couleur. Méfiez-vous de cet espèce de poulet."
            },
            {
                "collection":"conte",
                "nom":"Oursula",
                "type":"perso",
                "illustration":"./Images/Personnages/ursula.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Syllogomanie légère",
                        "effet":[
                            {
                                "contenu":"Hors vente auprès du <marchand-icon></marchand-icon>, les <steuf-icon></steuf-icon> que vous défaussez vont dans une pile de défausse qui vous est propre.",
                                "enfants":[
                                    {"contenu":"Vous pouvez piochez dans cette pile quand vous devriez piocher dans la pile de <steuf-icon></steuf-icon> classique."},
                                ]
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Commerce inéquitable",
                        "effet":[
                            {
                                "contenu":"Lorsqu'un <perso>Personnage</perso> arrive sur votre case, il peut vous acheter vos <steuf-icon></steuf-icon> comme auprès du <marchand-icon></marchand-icon>",
                                "enfants":[
                                    {"contenu":"Vous pouvez fixer le prix de vente de votre choix à chaque transaction."},
                                ]
                            }
                        ]
                    }
                ],
                "citation":"Il en faut peu pour être heureux, c'est une phrase de ceux qui ont peu. Il est quand même plus confortable d'en avoir beaucoup."
            },
            {
                "collection":"conte",
                "nom":"La créature",
                "type":"perso",
                "illustration":"./Images/Personnages/la_creature.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"3"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Flair de sanglier",
                        "effet":[
                            {"contenu":"Vous pouvez choisir entre les deux premiers <lieu-icon></lieu-icon> de la pile, reposez l'autre sur la pile."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Corps massif",
                        "effet":[
                            {"contenu":"+2 <blessure-icon></blessure-icon> supplémentaires"},
                            {"contenu":"Vous pouvez équiper un <corps-icon></corps-icon> supplémentaire."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Malédiction",
                        "effet":[
                            {"contenu":"Une fois au <sdm-icon></sdm-icon>, tous vos autres <effet>effets</effet> sont inactifs. Vous êtes donc à 3 <blessure-icon></blessure-icon>, et non 5. Ils redeviennent actifs lorsque vous revenez à 0 <blessure-icon></blessure-icon>"}
                        ]
                    }
                ],
                "citation":"L'humain est stupide, la bête est violente. Ou l'inverse. On ne distingue plus trop."
            },
            {
                "collection":"conte",
                "nom":"Robin Dubois",
                "type":"perso",
                "illustration":"./Images/Personnages/robin_dubois.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"},
                    {"nature":"</portee-icon>","montant":"+1"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Prendre aux riches, et le garder",
                        "effet":[
                            {
                                "contenu":"Si vous attaquez avec succès un <perso>Personnage</perso> dont le total d'or des <steuf-icon></steuf-icon> est supérieur au votre.",
                                "enfants":[
                                    {"contenu":"Le <perso>Personnage</perso> doit vous donner des <steuf-icon></steuf-icon> équipés de son choix jusqu'à que cette différence d'or soit au moins égale ou votre faveur."},
                                ]
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Contre-imposition",
                        "effet":[
                            {"contenu":"Tout paiement excédentaire en <or-icon></or-icon> auprès du <marchand-icon></marchand-icon> vous est reversé sous forme de jeton d'<or-icon></or-icon>"}
                        ]
                    }
                ],
                "citation":"Son nom c'est Dubois, et c'est juste une petite frappe. Ne croyez pas en ses discours sur la redistribution des richesses."
            },
            {
                "collection":"conte",
                "nom":"Reine de trèfle",
                "type":"perso",
                "illustration":"./Images/Personnages/reine_trefle.jpg","caracteristiques":[
                    {"nature":"<mauvais-icon></mauvais-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Soldats de la Reine de trèfle",
                        "effet":[
                            {"contenu":"Vous disposez de 2 <effet>Soldat de la Reine de trèfle</effet> tous les tours (non cumulable)."},
                            {"contenu":"<soin-icon></soin-icon> excédentaire reçu = 1 <effet>Soldat de la Reine de trèfle</effet>"}
                        ]
                            
                    },
                    {
                        "nature":"actif",
                        "nom":"A moi !",
                        "effet":
                            {"contenu":"Sacrifiez X <effet>Soldat de la Reine de trèfle</effet> = +X de défense jusqu'à votre prochain tour."}
                    },
                    {
                        "nature":"actif",
                        "nom":"Qu'on lui coupe la tête !",
                        "effet":
                            {"contenu":"Sacrifiez X <effet>Soldat de la Reine de trèfle</effet> = +X d'attaque jusqu'à votre prochain tour."}
                    }
                ],
                "citation":"Cela tombera à pic si vous avez le coeur à vous tenir à carreau - Un bouffon qui a fini décapité par une reine pas très flattée"
            },
            {
                "collection":"conte",
                "nom":"Machiavélique",
                "type":"perso",
                "illustration":"./Images/Personnages/machiavelique.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<loyal-icon></loyal-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"MEURS ! (1 fois / partie)",
                        "effet":
                            {"contenu":"Le <perso>Personnage</perso> ciblé prendra 3 <blessure-icon></blessure-icon> dans 2 tours."}
                    },
                    {
                        "nature":"actif",
                        "nom":"VIS ! (1 fois / partie)",
                        "effet":
                            {"contenu":"Le <perso>Personnage</perso> ciblé sera à 0 <blessure-icon></blessure-icon> dans 2 tours."}
                    },
                    {
                        "nature":"actif",
                        "nom":"TRANSFORMES-TOI !",
                        "effet":[
                            {"contenu":"Défaussez deux cartes d'un même type pour en piocher une de la pile correspondante."},
                            {"contenu":"Peut être fait plusieurs fois par tour."}
                        ]
                    }
                ],
                "citation":"En vérité, vous ne comprenez toujours pas pourquoi elle passe son temps à s'exclamer pour tout et n'importe quoi."
            },
            {
                "collection":"conte",
                "nom":"Cap'taine Crocs",
                "type":"perso",
                "illustration":"./Images/Personnages/capt_croc.jpg","caracteristiques":[
                    {"nature":"<mauvais-icon></mauvais-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"montant":"6", "nature":"<blessure-icon></blessure-icon>"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Mort aux mutins !",
                        "effet":
                            {"contenu":"+1 <bonus-atk-icon></bonus-atk-icon> lors que vous ciblez des <perso>Personnages</perso> non-<perso>Loyaux</perso>."}
                    },
                    {
                        "nature":"passif",
                        "nom":"Sus au butin !",
                        "effet":
                            {"contenu":"+1 de portée lors que vous ciblez des <perso>Personnages</perso> sur la case <marchand-icon></marchand-icon>"}
                    },
                    {
                        "nature":"passif",
                        "nom":"Vive les ****** !",
                        "effet":
                            {"contenu":"Vous pouvez payer 4 <or-icon></or-icon> au <marchand-icon></marchand-icon> pour vous <soin-icon></soin-icon> 1 <blessure-icon></blessure-icon>"}
                    }
                ],
                "citation":"Nombre de jours depuis la dernière mise à mort d'un matelot s'étant moqué des souliers de son Cap'taine : 0"
            },
            {
                "collection":"conte",
                "nom":"Whinny Tonka",
                "type":"perso",
                "illustration":"./Images/Personnages/whinny_tonka.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<ordre-neutre-icon></ordre-neutre-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Magnat",
                        "effet":
                            {"contenu":"Le prix de d'achat du <marchand-icon></marchand-icon> est de 5"}
                    },
                    {
                        "nature":"passif",
                        "nom":"Apparence soignée",
                        "effet":
                            {"contenu":"Tous vos <steuf-icon></steuf-icon> équipés ne peuvent être que de 2 qualités différentes."}
                    },
                    {
                        "nature":"passif",
                        "nom":"Loin de moi les nécessiteux",
                        "effet":
                            {"contenu":"Vous ne pouvez attaquer des <perso>Personnages</perso> dont le total d'or des <steuf-icon></steuf-icon> équipés est <b>strictement inférieur</b> au votre."}
                    }                    
                ],
                "citation":"Des rumeurs disent que mes sucreries causent le diabète. Le sucre et le diabète, voyons... Mensonges ! Fumisterie de communiste !"
            },
            {
                "collection":"conte",
                "nom":"Grand vilain Lycaon",
                "type":"perso",
                "illustration":"./Images/Personnages/lycaon.jpg",
                "caracteristiques":[
                    {"nature":"<mauvais-icon></mauvais-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Instinct animal",
                        "effet":
                            {"contenu":"Vous regardez le premier <lieu-icon></lieu-icon> de la pile."}
                    },
                    {
                        "nature":"actif",
                        "nom":"Prédation",
                        "effet":[
                            {"contenu":"Avant votre <i>Phase de déplacement</i>."},
                            {"contenu":"Vous pouvez désigner un autre <perso>Personnage</perso>."},
                            {"contenu":"+1 de portée lorsque vous l'attaquez."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Pistage",
                        "effet":[
                            {"contenu":"Lors de votre <i>Phase de déplacement</i>."},
                            {"contenu":"Vous pouvez vous arrêter directement sur la case du dernier <perso>Personnage</perso> que vous avez attaqué."}
                        ]                            
                    }
                ],
                "citation":"On me dit que j'ai des grandes dents, de grands yeux, de grandes mains... Il y en a marre qu'on juge le physique comme ça !"
            },            
            {
                "collection":"conte",
                "nom":"Saigneur Hemoglobinator",
                "type":"perso",
                "illustration":"./Images/Personnages/saigneur.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Ponction",
                        "effet":[
                            {"contenu":"Chaque <blessure-icon></blessure-icon> infligée lors de vos attaques vous confère 1 <blessure>Sang</blessure>."},
                            {"contenu":"1 <blessure>Sang</blessure> peut être échangée contre 1 <steuf-icon></steuf-icon> auprès du <marchand-icon></marchand-icon>"}
                        ]
                    },
                    {
                        "nature":"actif",
                        "nom":"Hématophage",
                        "effet":
                            {"contenu":"Consommez 1 <blessure>Sang</blessure> pour vous <soin>soigner</soin> une <blessure-icon></blessure-icon>"}
                    },
                    {
                        "nature":"passif",
                        "nom":"Hémophile",
                        "effet":
                        {"contenu":"Vous ne pouvez payer le <marchand-icon></marchand-icon> avec vos propres <blessure-icon></blessure-icon>"}
                    }
                ],
                "citation":"La crise de la quatre-centième vous fait parfois choisir des noms très ridicules."
            },
            {
                "collection":"dessin",
                "nom":"Miel volé...",
                "type":"conso",
                "illustration":"./Images/Consommables/miel.jpg",
                "caracteristiques":[
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"...et très très collant",
                        "effet":[
                            {"contenu":"Utilisable à tout moment."},
                            {"contenu":"Choisissez une option :",
                            "enfants":[
                                {"contenu":"Choisissez un emplacement de <steuf-icon></steuf-icon>, le <steuf-icon></steuf-icon> présent ou à venir ne pourra être défaussé ou vendu."}
                            ]},
                        ]
                    }    
                ],
                "citation":"Pour produire le miel, les abeilles régurgitent puis réingèrent du nectar plusieurs fois de suite. Bon appétit."
            },
            {
                "collection":"dessin",
                "nom":"Carton rouge",
                "type":"conso",
                "illustration":"./Images/Consommables/carton_rouge.png",
                "caracteristiques":[
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Le 12, tu sors !",
                        "effet":[
                            {"contenu":"Utilisable à tout moment."},
                            {"contenu":"Jusqu'au début de son prochain tour, le <perso>Personnage</perso> choisi ne peut pas être ciblé directement ou cibler directement d'autres <perso>Personnages</perso>."}
                        ]
                    }    
                ],
                "citation":"C'est fou les pouvoirs immenses d'un simple bout de papier, quand même."
            },
            {
                "collection":"dessin",
                "nom":"Ressort",
                "type":"conso",
                "illustration":"./Images/Consommables/ressort.jpg",
                "caracteristiques":[
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Attention en-dessous !",
                        "effet":[
                            {"contenu":"Déplacez-vous d'une case sans l'activer."}
                        ]
                    }    
                ],
                "citation":"Ce n'était pas ce à quoi on pensait quand on vous a dit qu'il fallait savoir rebondir dans la vie."
            },
            {
                "collection":"dessin",
                "nom":"Etoile trop super chouette",
                "type":"conso",
                "illustration":"./Images/Consommables/etoile.png",
                "caracteristiques":[
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Un cadeau ne se refuse pas",
                        "effet":[
                            {"contenu":"Offrez l'<conso>Etoile trop super chouette</conso> à un autre <perso>Personnage</perso>."},
                            {"contenu":"Il ne pourra utiliser ou défausser l'<conso>Etoile trop super chouette</conso>."}
                        ]
                    }    
                ],
                "citation":"On vous l'a offert. Ouaiiiss ! Super, chouette, génial ! Incroyable. Joie et allégresse. Youhou... Vous avez envie de mourir."
            },
            // Lieux
            {
                "collection":"dessin",
                "nom":"Stade de la Nouvelle-Equipe",
                "type":"lieu",
                "illustration":"./Images/Lieux/stade.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Terrain beaucoup trop long",
                        "effet":[
                            {"contenu":"Jusqu'au début de votre prochain tour."},
                            {"contenu":"<malus-1-icon ></malus-1-icon> </portee-icon>"}
                        ]
                    }    
                ],
                "citation":"Il n'y a pas que l'horizon dont on n'atteint jamais le bout."
            },
            {
                "collection":"dessin",
                "nom":"M3r D1g1t4l3",
                "type":"lieu",
                "illustration":"./Images/Lieux/mer.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"1 ou 0",
                        "effet":[
                            {"contenu":"Jusqu'au début de votre prochain tour."},
                            {"contenu":"Toutes les <blessure-icon></blessure-icon> mènent au <sdm-icon></sdm-icon>"}
                        ]
                    }    
                ],
                "citation":"Pour un ordinateur, vous ne pouvez pas être à moitié vivant. Vous êtes vivant, parce que vous êtes pas mort. C'est très bête quand même l'informatique."
            },
            {
                "collection":"dessin",
                "nom":"T0ur d3 d0nn33s",
                "type":"lieu",
                "illustration":"./Images/Lieux/tour_lokyo.png",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Injection SQL",
                        "effet":[
                            {"contenu":"Vous pouvez regarder les cartes en main de tous les <perso>Personnages</perso>."}
                        ]
                    }    
                ],
                "citation":"Toujours nettoyer son historique de navigation. TOUJOURS."
            },
            {
                "collection":"dessin",
                "nom":"Commissariat",
                "type":"lieu",
                "illustration":"./Images/Lieux/commissariat.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Dépôt des armes",
                        "effet":[
                            {"contenu":"Tous les <perso>Personnages</perso> doivent se défausser immédiatement de leurs <img class='conteneur-bonus bonus-type' src='./Images/arme.png' />"}
                        ]
                    }    
                ],
                "citation":"Quand quelqu'un muni d'une matraque dit que les armes sont interdites, c'est un peu cocasse."
            },
            // Personnages
            {
                "collection":"dessin",
                "nom":"Fauche-tout",
                "type":"perso",
                "illustration":"./Images/Personnages/fauche_tout.png",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>"
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Un faucheur fachant faucher",
                        "effet":[
                            {"contenu":"Dès qu'une attaque est réussie."},
                            {"contenu":"Au lieu d'infliger une <blessure-icon></blessure-icon> au défenseur, vous pouvez lui voler le <steuf-icon></steuf-icon> équipé ou en main de votre choix."},
                            {"contenu":"Vous ne pouvez voler deux fois le même <perso>Personnage</perso> d'affilée avec ce <b>passif</b>."}
                        ]
                    }    
                ],
                "citation":"Alors qu'il n'a pas de faux, il n'y a plus de blé après son passage. Ni d'oseille d'ailleurs."
            },
            {
                "collection":"dessin",
                "nom":"Marc Langer",
                "type":"perso",
                "illustration":"./Images/Personnages/marc_langer.jpg",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>"
                    },
                    {
                        "nature":"<ordre-neutre-icon></ordre-neutre-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Mauvais perdant (cumulable)",
                        "effet":[
                            {"contenu":"Dès que vous ratez une attaque ou une défense."},
                            {"contenu":"<attaque-icon></attaque-icon><bonus-1-icon></bonus-1-icon>"},
                            {"contenu":"Dure jusqu'à votre prochaine attaque réussie."}
                        ]
                    }    
                ],
                "citation":"Si vous rétorquez que c'est un anti-héros et qu'il n'a rien à faire ici. Je vous dirai que... Vous avez probablement raison."
            },
            {
                "collection":"dessin",
                "nom":"xANAx",
                "type":"perso",
                "illustration":"./Images/Personnages/xanax.jpg",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>"
                    },
                    {
                        "nature":"<loyal-icon></loyal-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"6"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Partout et nul part à la fois",
                        "effet":[
                            {"contenu":"Vous êtes libre de choisir si l'<effet>effet</effet> d'un <lieu-icon></lieu-icon> s'applique sur vous ou non."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Destinée",
                        "effet":[
                            {"contenu":"La première fois qu'un <sdm-icon></sdm-icon> est atteint lors de la partie."},
                            {"contenu":"Vous pouvez jouer directement la <lieu>M3r D1g1t4l3</lieu>, qu'importe si elle est dans la pile de pioche ou la défausse."}
                        ]
                    }
                ],
                "citation":"Elle ne sait répondre que par 1 ou 0. Elle n'a donc aucune conversation."
            },
            {
                "collection":"dessin",
                "nom":"Capitaine Flemme",
                "type":"perso",
                "illustration":"./Images/Personnages/.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>"
                    },
                    {
                        "nature":"<ordre-neutre-icon></ordre-neutre-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Comment c'est loin...",
                        "effet":[
                            {"contenu":"Utilisable uniquement lors de votre <i>Phase de déplacement</i>."},
                            {"contenu":"Vous pouvez rester sur votre <b>Case</b> au lieu de lancer les dés pour vous déplacer."},
                            {"contenu":"Cela réactive la <b>Case</b> sur laquelle vous vous trouvez déjà."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Paresse contagieuse",
                        "effet":[
                            {"contenu":"Votre </portee-icon> est divisée par deux, arrondi à l'unité inférieure."},
                            {"contenu":"Lorsqu'on vous cible directement, la </portee-icon> est divisée par deux, arrondi à l'unité inférieure."}
                        ]
                    }
                ],
                "citation":""
            },
            {
                "collection":"dessin",
                "nom":"Dori, l'explorateuse",
                "type":"perso",
                "illustration":"./Images/Personnages/dori.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>"
                    },
                    {
                        "nature":"<loyal-icon></loyal-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Explorateuse",
                        "effet":[
                            {"contenu":"Utilisable uniquement lors de votre <i>Phase de déplacement</i>."},
                            {"contenu":"Vous pouvez aller directement sur la case <lieu-icon></lieu-icon> au lieu de lancer les dés."}
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Destinée",
                        "effet":[
                            {"contenu":"Si vous vous rendez sur la case <lieu-icon></lieu-icon> dès le premier tour à l'aide </actif-icon> <effet>Explorateuse</effet>."},
                            {"contenu":"Vous pouvez vous équiper directement du <commun>Sac à dos</commun> et de <epique>La caaaaaaaarte</epique>, qu'importe la pile dans laquelle ils se trouvent."}
                        ]
                    }
                ],
                "citation":"Elle a sa carte fidélité dans tous les agences de voyage."
            },
            // https://fr.wikipedia.org/wiki/Inspecteur_Gadget_(s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e_d%27animation,_1983)#Les_gadgets_de_Gadget
            {
                "collection":"dessin",
                "nom":"Luìs le brocantier",
                "type":"perso",
                "illustration":"./Images/Personnages/luis.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>"
                    },
                    {
                        "nature":"<ordre_neutre></ordre_neutre>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Expert en baratin",
                        "effet":[
                            {"contenu":"Vous pouvez piocher des <conso-icon></conso-icon> quand vous pouvez piocher des <steuf-icon></steuf-icon>."},
                            {"contenu":"Et inversement."}
                        ]
                    }
                ],
                "citation":"Le plus curieux n'est pas qu'il accumule autant d'objets sans intérêts. Mais qu'il arrive à les revendre !"
            },
            {
                "collection":"dessin",
                "nom":"Miguel-Angelo",
                "type":"perso",
                "illustration":"./Images/Personnages/.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>"
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Torture ninja",
                        "effet":[
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Carapace",
                        "effet":[
                            {"contenu":"<bonus-1-icon></bonus-1-icon><bonus-def-icon></bonus-def-icon>"}
                        ]
                    }
                ],
                "citation":"Le plus curieux n'est pas qu'il accumule autant d'objets sans intérêts. Mais qu'il arrive à les revendre !"
            },
            {
                "collection":"dessin",
                "nom":"Maëva la guêpe",
                "type":"perso",
                "illustration":"./Images/Personnages/meia.jpg",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>"
                    },
                    {
                        "nature":"<chaotique-icon></chaotique-icon>",
                        "montant":""
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"4"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Déserteuse",
                        "effet":[
                            {"contenu":"Ne peut être activé que lors de votre <i>première phase d'action</i> si des <perso>Personnages</perso> non-<bon-icon></bon-icon> sont sur la même <b>Case</b> que vous."},
                            {"contenu":"Vous pouvez vous décaler d'une case sur le côté de votre choix."},
                            {"contenu":"Cela activera la case en question."}
                        ]
                    }
                ],
                "citation":"Malheureusement, elle, c'est plutôt «vole comme une abeille et pique comme un papillon»."
            },
            // Steufs
            {
                "collection":"dessin",
                "nom":"Ballon",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/ballon.jpg",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"2"
                    },
                    {
                        "nature":"</portee-icon>",
                        "montant":"<bonus-2-icon></bonus-2-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Projectile",
                        "effet":[
                            {"contenu":"Lorsque votre attaque se termine."},
                            {"contenu":"Vous défaussez le <commun>Ballon</commun> et le défenseur le récupère en main.."}
                        ]
                    }
                ],
                "citation":"Le ballon est votre ami. Et bien sûr que l'on donne des coups de pieds à son ami."
            },
            {
                "collection":"dessin",
                "nom":"Chat Dick",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/le_chat.jfif",
                "caracteristiques":[
                    {
                        "nature":"<accessoire-icon></accessoire-icon>"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"4"
                    },
                    {
                        "nature":"<blessure-icon></blessure-icon>",
                        "montant":"2"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Expression très personnelle de l'affection",
                        "effet":[
                            {"contenu":"Attaquer un <perso>Personnage</perso> à 1 de </portee-icon> maximum avec 2 <atk-icon></atk-icon>"}
                        ]
                    }
                ],
                "citation":"Tout au fond de son regard, planqué derrière sa satisfaction, vous voyez bien que vous méritez qu'il vous punisse de la sorte."
            },
            {
                "collection":"dessin",
                "nom":"La caaaaaaaarte",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/carte.jpg",
                "caracteristiques":[
                    {
                        "nature":"<accessoire-icon></accessoire-icon>"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"1"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Topographie",
                        "effet":[
                            {"contenu":"Vous pouvez regarder la première carte <lieu-icon></lieu-icon> de la pile à tout moment."}
                        ]
                    }
                ],
                "citation":"Vous regrettez de l'avoir prêté à votre petite soeur. C'est mignon les dessins, mais c'est pas très pratique pour se réperer."
            },
            {
                "collection":"dessin",
                "nom":"Sac à dos",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/sac.jpeg",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>"
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
                            {"contenu":"<bonus-1-icon></bonus-1-icon> à votre limite de carte en main."}
                        ]
                    }
                ],
                "citation":"C'est juste un sac à dos. Solide et pratique. Il n'a rien de spécial. C'est tristement... banal."
            },
            {
                "collection":"dessin",
                "nom":"Gant arbalète laser",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/gant_laser.jpg",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"3"
                    },
                    {
                        "nature":"<bonus-atk-icon></bonus-atk-icon>",
                        "montant":"<malus-1-icon></malus-1-icon>"
                    },
                    {
                        "nature":"</portee-icon>",
                        "montant":"<bonus-1-icon></bonus-1-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"",
                        "nom":"",
                        "effet":[
                        ]
                    }
                ],
                "citation":"Vous avez cessé d'essayer de comprendre si ça a du sens quand on vous a dit qu'il faut remettre des carreaux de laser dans l'arme."
            },
            {
                "collection":"dessin",
                "nom":"Taille de Guêpe",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/taille_guepe.gif",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"3"
                    },
                    {
                        "nature":"<bonus-def-icon></bonus-def-icon>",
                        "montant":"<bonus-2-icon></bonus-2-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"",
                        "effet":[
                            {"contenu":"-1 à votre limite de carte en main."}
                        ]
                    }
                ],
                "citation":"Taille de Guêpe, le nouveau corset de Carlos Galerfeld. Si maigre que vous en devenez intouchable."
            },
            {
                "collection":"dessin",
                "nom":"Marteau téléscopique",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/marteau.jpg",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>",
                        "montant":"<accessoire-icon></accessoire-icon>",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"3"
                    },
                    {
                        "nature":"<bonus-atk-icon></bonus-atk-icon>",
                        "montant":"<bonus-1-icon></bonus-1-icon>"
                    },
                    {
                        "nature":"</portee-icon>",
                        "montant":"<bonus-1-icon></bonus-1-icon>"
                    }
                ],
                "effets":[
                    {
                        "nature":"",
                        "nom":"",
                        "effet":[
                        ]
                    }
                ],
                "citation":"Avec un tel marteau, je vais vous clouer le bec ! - Un méchant avec des mauvaises phrases de méchant"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()