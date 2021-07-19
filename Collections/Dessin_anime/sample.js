(function(){
    var data = {
        "cartes":[
            {
                "edition":"dessin",
                "nom":"Miel volé...",
                "type":"conso",
                "illustration":"./Images/Consommables/miel.jpg",
                "caracteristiques":[
                    {
                        "nature":"conso-icon",
                        "montant":"",
                    },
                    {
                        "nature":"or-icon",
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
                        "nature":"conso-icon",
                        "montant":"",
                    },
                    {
                        "nature":"or-icon",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"« Le 12, tu sors ! »",
                        "effet":[
                            {"contenu":"Utilisable à tout moment."},
                            {"contenu":"Le <perso>Personnage</perso> choisi ne peut pas être ciblé ou cibler d'autres <perso>Personnages</perso>"}
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
                        "nature":"conso-icon",
                        "montant":"",
                    },
                    {
                        "nature":"or-icon",
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
                        "nature":"conso-icon",
                        "montant":"",
                    },
                    {
                        "nature":"or-icon",
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
                            {"contenu":"Toutes les <blessure-icon></blessure-icon> mènent au <sdm-icon></sdm-icon>."}
                        ]
                    }    
                ],
                "citation":"« Que vous vous faites une coupure de papier ou arracher un membre, ça sera du pareil au même. »"
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
                            {"contenu":"Vous pouvez regarder les cartes en main de tous les <perso>Personnages</perso>"}
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
                        "nom":"Dépôt des armes SQL",
                        "effet":[
                            {"contenu":"Tous les <perso>Personnages</perso> doivent se défausser immédiatement de leurs <img class='conteneur-bonus bonus-type' src='../Collection_de_base/Images/arme.png' />"}
                        ]
                    }    
                ],
                "citation":"« Quand quelqu'un muni d'une matraque dit que les armes sont interdites, c'est un peu cocasse. »"
            },
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
                        "nom":"Un fauché fachant faucher",
                        "effet":[
                            {"contenu":"Dès qu'une attaque est réussie."},
                            {"contenu":"Au lieu d'infliger une <blessure-icon></blessure-icon> au défenseur, vous pouvez lui voler le <steuf-icon></steuf-icon> équipé de votre choix."},
                            {"contenu":"Vous ne pouvez voler deux fois le même <perso>Personnage</perso> d'affilée."}
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
                "nom":"xXxANAxXx",
                "type":"perso",
                "illustration":"./Images/Personnages/marc_langer.jpg",
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
                        "nature":"actif",
                        "nom":"K1k00t1s4t10n",
                        "effet":[
                            {"contenu":"Dès qu'un autre <perso>Personnage</perso> décède."},
                            {"contenu":"Vous pouvez jouer son <perso>Personnage</perso> à son prochain tour."},
                            {"contenu":"Il ne sera pas considéré comme au <sdm-icon></sdm-icon>."},
                            {"contenu":"Il sera définitivement décédé à la fin de son prochain tour."}
                        ]
                    }    
                ],
                "citation":"« Si vous rétorquez que c'est un anti-héros et qu'il n'a rien à faire ici. Je vous dirai que... Vous avez probablement raison. »"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()