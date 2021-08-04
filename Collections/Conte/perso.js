﻿(function(){
    var data = {
        "cartes":[
            {
                "edition":"conte",
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
                        "nom":"« Arrêtez de vous battez ! »",
                        "effet":[
                            {
                                "contenu":"Vous pouvez prendre la place d'un autre <perso>Personnage</perso> attaqué dans votre <portee-icon></portee-icon> pour vous défendre à sa place."
                            }
                        ]
                    }
                ],
                "citation":"« Fière grande prédicatrice du saint-ordre de la paix entre tous les animaux de basse-cour, elle finit toujours ses phrases par «cot cot.». »"
            },
            {
                "edition":"conte",
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
                "citation":"« L'équipe du Compendium présente ses excuses auprès des autres joueurs si quelqu'un s'appelle Sandrine parmi eux. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Avec sa pomme dans la bouche, vous n'entendez que les voyelles. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Non, en dépit de son incroyable chevelure, son nom n'est pas celui d'un modèle révolutionnaire de fer à lisser. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Il s'appelle Enzo, a une calèche toute option, se parfume au Jouve-en-chie et ne dit rien pour avoir l'air mystérieux. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Elle vous parle d'une chenille fumant la chicha et d'un lapin lui volant son âme. N'importe quoi. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Voici la phonétique de ce qu'elle dit, débrouillez-vous avec le sens : ghtylemaoe ohikila mpooileenaiuy glhkylu thrrrkkfff, MARIUS. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Avec le ton le plus sérieux du monde, il vous demandera l'adresse de votre coiffeur car il adore son travail. »"
            },
            {
                "edition":"conte",
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
                "citation":"« On l'a retrouvé dans un cagibi avec un écriteau indiquant : « Allumez-moi, ceci n'est pas un piège du tout. » »"
            },
            {
                "edition":"conte",
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
                "citation":"« En l'occurence, cendrée n'est pas une couleur. Méfiez-vous de cet espèce de poulet. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Il en faut peu pour être heureux, c'est une phrase de ceux qui ont peu. Il est quand même plus confortable d'en avoir beaucoup. »"
            },
            {
                "edition":"conte",
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
                "citation":"« L'humain est stupide, la bête est violente. Ou l'inverse. On ne distingue plus trop. »"
            },
            {
                "edition":"conte",
                "nom":"Robin Dubois",
                "type":"perso",
                "illustration":"./Images/Personnages/robin_dubois.jpg",
                "caracteristiques":[
                    {"nature":"<moral-neutre-icon></moral-neutre-icon>"},
                    {"nature":"<chaotique-icon></chaotique-icon>"},
                    {"nature":"<blessure-icon></blessure-icon>","montant":"4"},
                    {"nature":"<portee-icon></portee-icon>","montant":"+1"}
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
                "citation":"« Son nom c'est Dubois, et c'est juste une petite frappe. Ne croyez pas en ses discours sur la redistribution des richesses. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Cela tombera à pic si vous avez le coeur à vous tenir à carreau - Un bouffon qui a fini décapité par une reine pas très flattée »"
            },
            {
                "edition":"conte",
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
                "citation":"« En vérité, vous ne comprenez toujours pas pourquoi elle passe son temps à s'exclamer pour tout et n'importe quoi. »"
            },
            {
                "edition":"conte",
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
                "citation":"« Nombre de jours depuis la dernière mise à mort d'un matelot s'étant moqué des souliers de son Cap'taine : 0 »"
            },
            {
                "edition":"conte",
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
                        "nom":"« Loin de moi les nécessiteux »",
                        "effet":
                            {"contenu":"Vous ne pouvez attaquer des <perso>Personnages</perso> dont le total d'or des <steuf-icon></steuf-icon> équipés est <b>strictement inférieur</b> au votre."}
                    }                    
                ],
                "citation":"« Des rumeurs disent que mes sucreries causent le diabète. Le sucre et le diabète, voyons... Mensonges ! Fumisterie de communiste ! »"
            },
            {
                "edition":"conte",
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
                "citation":"« On me dit que j'ai des grandes dents, de grands yeux, de grandes mains... Il y en a marre qu'on juge le physique comme ça ! »"
            },            
            {
                "edition":"conte",
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
                "citation":"« La crise de la quatre-centième vous fait parfois choisir des noms très ridicules. »"
            }
        ]
    };
localStorage.setItem('data', JSON.stringify(data));
})()