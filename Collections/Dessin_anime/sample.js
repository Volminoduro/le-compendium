(function(){
    var data = {
        // Consommables
        "cartes":[
            {
                "edition":"dessin",
                "nom":"Miel volé...",
                "type":"conso",
                "illustration":"./Images/Consommables/miel.jpg",
                "caracteristiques":[
                    {
                        "nature":"<conso-icon></conso-icon>",
                        "montant":"",
                    },
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
                "citation":"« Pour produire le miel, les abeilles régurgitent puis réingèrent du nectar plusieurs fois de suite. Bon appétit. »"
            },
            {
                "edition":"dessin",
                "nom":"Carton rouge",
                "type":"conso",
                "illustration":"./Images/Consommables/carton_rouge.png",
                "caracteristiques":[
                    {
                        "nature":"<conso-icon></conso-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"« Le 12, tu sors ! »",
                        "effet":[
                            {"contenu":"Utilisable à tout moment."},
                            {"contenu":"Jusqu'au début de son prochain tour, le <perso>Personnage</perso> choisi ne peut pas être ciblé directement ou cibler directement d'autres <perso>Personnages</perso>."}
                        ]
                    }    
                ],
                "citation":"« C'est fou les pouvoirs immenses d'un simple bout de papier, quand même. »"
            },
            {
                "edition":"dessin",
                "nom":"Ressort",
                "type":"conso",
                "illustration":"./Images/Consommables/ressort.jpg",
                "caracteristiques":[
                    {
                        "nature":"<conso-icon></conso-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"« Attention en-dessous ! »",
                        "effet":[
                            {"contenu":"Déplacez-vous d'une case sans l'activer."}
                        ]
                    }    
                ],
                "citation":"« Ce n'était pas ce à quoi on pensait quand on vous a dit qu'il fallait savoir rebondir dans la vie. »"
            },
            {
                "nombre":"2",
                "edition":"dessin",
                "nom":"Etoile trop super chouette",
                "type":"conso",
                "illustration":"./Images/Consommables/etoile.png",
                "caracteristiques":[
                    {
                        "nature":"<conso-icon></conso-icon>",
                        "montant":"",
                    },
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
                "citation":"« On vous l'a offert. Ouaiiiss ! Super, chouette, génial ! Incroyable. Joie et allégresse. Youhou... Vous avez envie de mourir. »"
            },
            // Lieux
            {
                "edition":"dessin",
                "nom":"Stade de la Nouvelle-Equipe",
                "type":"lieu",
                "illustration":"./Images/Lieux/stade.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>",
                        "montant":"",
                    }
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Terrain beaucoup trop long",
                        "effet":[
                            {"contenu":"Jusqu'au début de votre prochain tour."},
                            {"contenu":"<malus-1-icon ></malus-1-icon> <portee-icon></portee-icon>"}
                        ]
                    }    
                ],
                "citation":"« Il n'y a pas que l'horizon dont on n'atteint jamais le bout. »"
            },
            {
                "edition":"dessin",
                "nom":"M3r D1g1t4l3",
                "type":"lieu",
                "illustration":"./Images/Lieux/mer.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>",
                        "montant":"",
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
                "citation":"« Pour un ordinateur, vous ne pouvez pas être à moitié vivant. Vous êtes vivant, parce que vous êtes pas mort. C'est très bête quand même l'informatique. »"
            },
            {
                "edition":"dessin",
                "nom":"T0ur d3 d0nn33s",
                "type":"lieu",
                "illustration":"./Images/Lieux/tour_lokyo.png",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>",
                        "montant":"",
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
                "citation":"« Toujours nettoyer son historique de navigation. TOUJOURS. »"
            },
            {
                "edition":"dessin",
                "nom":"Commissariat",
                "type":"lieu",
                "illustration":"./Images/Lieux/commissariat.jpg",
                "caracteristiques":[
                    {
                        "nature":"<lieu-icon></lieu-icon>",
                        "montant":"",
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Dépôt des armes",
                        "effet":[
                            {"contenu":"Tous les <perso>Personnages</perso> doivent se défausser immédiatement de leurs <img class='conteneur-bonus bonus-type' src='../Collection_de_base/Images/arme.png' />"}
                        ]
                    }    
                ],
                "citation":"« Quand quelqu'un muni d'une matraque dit que les armes sont interdites, c'est un peu cocasse. »"
            },
            // Personnages
            {
                "edition":"dessin",
                "nom":"Fauche-tout",
                "type":"perso",
                "illustration":"./Images/Personnages/fauche_tout.png",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
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
                "citation":"« Alors qu'il n'a pas de faux, il n'y a plus de blé après son passage. Ni d'oseille d'ailleurs. »"
            },
            {
                "edition":"dessin",
                "nom":"Marc Langer",
                "type":"perso",
                "illustration":"./Images/Personnages/marc_langer.jpg",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
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
                "citation":"« Si vous rétorquez que c'est un anti-héros et qu'il n'a rien à faire ici. Je vous dirai que... Vous avez probablement raison. »"
            },
            {
                "edition":"dessin",
                "nom":"xANAx",
                "type":"perso",
                "illustration":"./Images/Personnages/xanax.jpg",
                "caracteristiques":[
                    {
                        "nature":"<mauvais-icon></mauvais-icon>",
                        "montant":"",
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
                "citation":"« Elle ne sait répondre que par 1 ou 0. Elle n'a donc aucune conversation. »"
            },
            {
                "edition":"dessin",
                "nom":"Capitaine Flemme",
                "type":"perso",
                "illustration":"./Images/Personnages/.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>",
                        "montant":"",
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
                        "nom":"« Comment c'est loin... »",
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
                            {"contenu":"Votre <portee-icon></portee-icon> est divisée par deux, arrondi à l'unité inférieure."},
                            {"contenu":"Lorsqu'on vous cible directement, la <portee-icon></portee-icon> est divisée par deux, arrondi à l'unité inférieure."}
                        ]
                    }
                ],
                "citation":"«  »"
            },
            {
                "edition":"dessin",
                "nom":"Dori, l'explorateuse",
                "type":"perso",
                "illustration":"./Images/Personnages/dori.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>",
                        "montant":"",
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
                            {"contenu":"Si vous vous rendez sur la case <lieu-icon></lieu-icon> dès le premier tour à l'aide <actif-icon></actif-icon> <effet>Explorateuse</effet>."},
                            {"contenu":"Vous pouvez vous équiper directement du <commun>Sac à dos</commun> et de <epique>La caaaaaaaarte</epique>, qu'importe la pile dans laquelle ils se trouvent."}
                        ]
                    }
                ],
                "citation":"« Elle a sa carte fidélité dans tous les agences de voyage. »"
            },
            // https://fr.wikipedia.org/wiki/Inspecteur_Gadget_(s%C3%A9rie_t%C3%A9l%C3%A9vis%C3%A9e_d%27animation,_1983)#Les_gadgets_de_Gadget
            {
                "edition":"dessin",
                "nom":"Luìs le brocantier",
                "type":"perso",
                "illustration":"./Images/Personnages/luis.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>",
                        "montant":"",
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
                "citation":"« Le plus curieux n'est pas qu'il accumule autant d'objets sans intérêts. Mais qu'il arrive à les revendre ! »"
            },
            {
                "edition":"dessin",
                "nom":"Miguel-Angelo",
                "type":"perso",
                "illustration":"./Images/Personnages/.jpg",
                "caracteristiques":[
                    {
                        "nature":"<bon-icon></bon-icon>",
                        "montant":"",
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
                "citation":"« Le plus curieux n'est pas qu'il accumule autant d'objets sans intérêts. Mais qu'il arrive à les revendre ! »"
            },
            {
                "edition":"dessin",
                "nom":"Maëva la guêpe",
                "type":"perso",
                "illustration":"./Images/Personnages/meia.jpg",
                "caracteristiques":[
                    {
                        "nature":"<moral-neutre-icon></moral-neutre-icon>",
                        "montant":"",
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
                "citation":"« Malheureusement, elle, c'est plutôt «vole comme une abeille et pique comme un papillon». »"
            },
            // Steufs
            {
                "edition":"dessin",
                "nom":"Ballon",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/ballon.jpg",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>",
                        "montant":"",
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"2"
                    },
                    {
                        "nature":"<portee-icon></portee-icon>",
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
                "citation":"« Le ballon est votre ami. Et bien sûr que l'on donne des coups de pieds à son ami. »"
            },
            {
                "edition":"dessin",
                "nom":"Chat Dick",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/le_chat.jfif",
                "caracteristiques":[
                    {
                        "nature":"<accessoire-icon></accessoire-icon>",
                        "montant":"",
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
                            {"contenu":"Attaquer un <perso>Personnage</perso> à 1 de <portee-icon></portee-icon> maximum avec 2 <atk-icon></atk-icon>"}
                        ]
                    }
                ],
                "citation":"« Tout au fond de son regard, planqué derrière sa satisfaction, vous voyez bien que vous méritez qu'il vous punisse de la sorte. »"
            },
            {
                "edition":"dessin",
                "nom":"La caaaaaaaarte",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/carte.jpg",
                "caracteristiques":[
                    {
                        "nature":"<accessoire-icon></accessoire-icon>",
                        "montant":"",
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
                "citation":"« Vous regrettez de l'avoir prêté à votre petite soeur. C'est mignon les dessins, mais c'est pas très pratique pour se réperer. »"
            },
            {
                "edition":"dessin",
                "nom":"Sac à dos",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/sac.jpeg",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>",
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
                            {"contenu":"<bonus-1-icon></bonus-1-icon> à votre limite de carte en main."}
                        ]
                    }
                ],
                "citation":"« C'est juste un sac à dos. Solide et pratique. Il n'a rien de spécial. C'est tristement... banal. »"
            },
            {
                "edition":"dessin",
                "nom":"Gant arbalète laser",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/gant_laser.jpg",
                "caracteristiques":[
                    {
                        "nature":"<arme-icon></arme-icon>",
                        "montant":"",
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
                        "nature":"<portee-icon></portee-icon>",
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
                "citation":"« Vous avez cessé d'essayer de comprendre si ça a du sens quand on vous a dit qu'il faut remettre des carreaux de laser dans l'arme. »"
            },
            {
                "edition":"dessin",
                "nom":"Taille de Guêpe",
                "type":"steuf commun",
                "illustration":"./Images/Steufs/taille_guepe.gif",
                "caracteristiques":[
                    {
                        "nature":"<corps-icon></corps-icon>",
                        "montant":"",
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
                "citation":"« Taille de Guêpe, le nouveau corset de Carlos Galerfeld. Si maigre que vous en devenez intouchable. »"
            },
            {
                "edition":"dessin",
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
                        "nature":"<portee-icon></portee-icon>",
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
                "citation":"« «Avec un tel marteau, je vais vous clouer le bec !» - Un méchant avec de mauvaises phrase de méchant »"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()