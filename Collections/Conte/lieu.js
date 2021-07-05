(function(){
    var data = {
        "cartes":[
            {
                "edition":"conte",
                "nom":"Baobab en barbe-à-papa",
                "type":"lieu",
                "illustration":"./Images/Lieux/baobab.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Friandise généreuse",
                            "effet":[
                                {"contenu":"Choisissez une option :",
                                "enfants":[
                                    {"contenu":"En commençant par le <perso>Personnage</perso> qui a découvert ce <lieu>Lieu</lieu> puis dans l'ordre de jeu."},
                                    {"contenu":"Chaque <perso>Personnage</perso> peut se soigner jusqu'à 1 <blessure>Blessures</blessure>."},
                                    {"contenu":"A partir de 4 <blessure>Blessures</blessure> <soin>soignées</soin> de cette façon, défaussez immédiatement ce <lieu>Lieu</lieu>."}
                                ]}
                            ]
                        }
                ],
                "citation":"« N'essayez pas d'y grimper, ni de vous y abriter par temps de pluie. »"
            },
            {
                "edition":"conte",
                "nom":"Cahutte de Bibi Yog'Yourte",
                "type":"lieu",
                "illustration":"./Images/Lieux/yourte.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Les produits laitiers",
                            "effet":[
                                {"contenu":"Vous contratez la <effet>Gaze'Trop</effet>, mettez <lieu>Cahutte de Bibi Yog'Yourte</lieu> sur la case <effet>passif</effet> pour le symboliser."},
                                {"contenu":"Tant que <effet>Gaze'Trop</effet> est actif sur un <perso>Personnage</perso>, ne défaussez pas <lieu>Cahutte de Bibi Yog'Yourte</lieu>."},
                            ]
                        },
                        {
                            "nature":"passif",
                            "nom":"Gaze'Trop",
                            "effet":[
                                {"contenu":"Au début de votre tour, subissez 1 <blessure>blessure</blessure>."},
                                {"contenu":"Quand vous attaquez / défendez, votre <effet>Gaze'Trop</effet> va au défenseur / attaquant."},
                            ]
                        }
                ],
                "citation":"« Le Yog'Yourte de Bibi, le produit laitier avec des vrais morceaux de yourte à l'intérieur ! »"
            },
            {
                "edition":"conte",
                "nom":"Planche au petit pieu",
                "type":"lieu",
                "illustration":"./Images/Lieux/planche_pieu.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                        {
                            "nature":"passif",
                            "nom":"Litterie inconfortable",
                            "effet":[
                                {"contenu":"Lancez le dé de defense."},
                                {"contenu":"Si votre défense total est inférieure à 3 :",
                                "enfants":[
                                    {"contenu":"Subissez 1 <blessure>blessure</blessure>."},
                                    {"contenu":"Piochez 2 <steuf>Steufs</steuf>."}
                                ]}
                            ]
                        }
                ],
                "citation":"« Vous ne vous plaindrez plus jamais de vous endormir sur un petit caillou au milieu du dos. »"
            },
            {
                "edition":"conte",
                "nom":"Antre du lion anémié",
                "type":"lieu",
                "illustration":"./Images/Lieux/caverne_lion.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Safari pour incompétents",
                            "effet":""
                        }
                ],
                "citation":"« Il vous faisait pitié. Vous pourrez désormais porter sa fourrure pleine de puces fièrement sur vos épaules. »"
            },
            {
                "edition":"conte",
                "nom":"Caverne aux brigands",
                "type":"lieu",
                "illustration":"./Images/Lieux/caverne_brigand.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Féru de féraille",
                            "effet":[
                                {"contenu":"Vous pouvez piochez le <steuf>Steuf</steuf> de votre choix dans la pile de défausse."}
                            ]
                        }
                ],
                "citation":"« Camélia, ouvre toi ! Colza, ouvre toi ! Soja, ouvre toi ! Toujours pas... »"
            },
            {
                "edition":"conte",
                "nom":"Gueule de Doby Mick",
                "type":"lieu",
                "illustration":"./Images/Lieux/gueule_moby_dick.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                ],
                "citation":"« Qui aurait une très grosse brosse à dents ? On fait pas souvent le ménage là-dedans. »"
            },
            {
                "edition":"conte",
                "nom":"Gouffre mal signalé",
                "type":"lieu",
                "illustration":"./Images/Lieux/gouffre.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"Vitesse et précipice",
                        "effet":[
                            {"contenu":"Si votre <i>jet de déplacement</i> était supérieur à 3.",
                            "enfants":[
                                {"contenu":"Vous vous défaussez d'un <steuf>Steuf</steuf> de votre choix ou subissez une <blessure>Blessures</blessure>."}
                            ]}
                        ]
                    }
                ],
                "citation":"« A ce jour, on compte 214 accidents de selfies à cause de cette âbime. »"
            },
            {
                "edition":"conte",
                "nom":"Atelier d'assemblage du grand Solat",
                "type":"lieu",
                "illustration":"./Images/Lieux/atelier_solat.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Bouton rouge",
                        "effet":[
                            {"contenu":"Les <perso>Personnages</perso> à plus de 3 <blessure>blessures</blessure> sont <soin>soignés</soin> d'une <blessure>blessure</blessure>."},
                            {"contenu":"Les <perso>Personnages</perso> à moins de 3 <blessure>blessures</blessure> subissent une <blessure>blessure</blessure>."}
                        ]
                    }
                ],
                "citation":"« Ce n'est pas votre faute si votre groupe est décédé, il y avait un bouton rouge. Il fallait appuyer dessus, 'comprenez ? »"
            },
            {
                "edition":"conte",
                "nom":"Cacafarnaome",
                "type":"lieu",
                "illustration":"./Images/Lieux/cacafarnaome.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Égalitarisme tempétueux",
                        "effet":[
                            {"contenu":"Réunissez tous les  (équipés ou en main) en jeu et mélangez-les."},
                            {"contenu":"Redistribuez les <steuf>Steufs</steuf> de manière à ce que tout le monde en ait le même nombre, puis défaussez celles en trop."}
                        ]
                    }
                ],
                "citation":"« «La propriété, c'est le vol» prends une toute autre mesure ici. »"
            },
            {
                "edition":"conte",
                "nom":"Arène du pugilisme",
                "type":"lieu",
                "illustration":"./Images/Lieux/arene_pugilisme.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
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
                "citation":"« La première règle de l'arène du pugilisme est : il n'y a aucune règle. Aucun sens. »"
            },
            {
                "edition":"conte",
                "nom":"Bois du Gel-aux-dents",
                "type":"lieu",
                "illustration":"./Images/Lieux/bois_gel.jpg",
                "caracteristiques":[
                    {"nature":"lieu-icon","montant":""}
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
                "citation":"« La première règle de l'arène du pugilisme est : il n'y a aucune règle. Aucun sens. »"
            }
        ]
    };
localStorage.setItem('data', JSON.stringify(data));
})()