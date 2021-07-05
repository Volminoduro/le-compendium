(function(){
    var data = {
        "cartes":[
            {
                "nombre":"3",
                "edition":"conte",
                "nom":"Bonhomme en pain d'épices",
                "type":"conso",
                "illustration":"./Images/Consommables/bonhomme_epices.jpg","caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"3"}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Petite douceur",
                            "effet":[
                                {"contenu":"Choisissez une option :",
                                "enfants":[
                                    {"contenu":"Vous <soin>soigne</soin> d'une <blessure>Blessure</blessure>."},
                                    {"contenu":"S'il l'accepte, <soin>soigne</soin> un autre <perso>Personnage</perso> d'une <blessure>Blessure</blessure>."}]}
                            ]
                        }
                ],
                "citation":"« Oups, on a oublié de vous dire que ce délicieux biscuit était un petit enfant victime d'un sort. Non, on plaisante...  peut-être. »"
            },
            {
                "edition":"conte",
                "nom":"Pomme d'or",
                "type":"conso",
                "illustration":"./Images/Consommables/pomme_or.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"Protection divine",
                        "effet":{
                            "contenu":"Ciblez un <perso>Personnage</perso>, jusqu'à son prochain tour :",
                            "enfants":{"contenu":"Pendant chaque tour de chaque autre <perso>Personnage</perso> que la cible, vous annulez jusqu'à une blessure ."}
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
                "citation":"« Mangez cinq fruits et légumes par jour, c'est ce que disait le serpent. »"
            },
            {
                "edition":"conte",
                "nom":"Rune de téléportation",
                "type":"conso",
                "illustration":"./Images/Consommables/pierre_teleportation.jpg","caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
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
                "citation":"« Cette fois-ci ça a fonctionné comme prévu. Vous allez pas vous retrouver aux premières loges de la conception de votre petit frère. »"
            },
            {
                "nombre":"2",
                "edition":"conte",
                "nom":"Ailes atrophiées",
                "type":"conso",
                "illustration":"./Images/Consommables/ailes_atrophiees.jpg","caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
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
                "citation":"« Elles vous seront bien plus utiles qu'à la créature à qui vous les avez arrachées. »"
            },
            {
                "nombre":"2",
                "edition":"conte",
                "nom":"Dés pipés",
                "type":"conso",
                "illustration":"./Images/Consommables/des.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":
                    {"nature":"actif",
                    "nom":"Tirage mal fait",
                    "effet":[
                        {"contenu":"Utilisable à tout moment."},
                        {"contenu":"Pour le tirage de dé actuel : ajoutez 1 ou retirez 1."}
                    ]
                },
                "citation":"« Si même le jeu vous permet de tricher, ça devient vraiment n'importe quoi. »"
            },
            {
                "edition":"conte",
                "nom":"Peluche du Pope",
                "type":"conso",
                "illustration":"./Images/Consommables/peluche.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Ton jeu, mes règles",
                    "effet":{"contenu":"Le résultat de votre tirage de dé actuel ou à venir sera <b>3</b>."}
                }
                ,
                "citation":"« Il faut toujours que vous preniez cela trop au sérieux. Prendre une peluche en otage, quand même. »"
            },
            {
                "edition":"conte",
                "nom":"Poudre d'altération",
                "type":"conso",
                "illustration":"./Images/Consommables/poudre_perlimpinpin.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"On le voit, on le voit plus",
                    "effet":[
                        {"contenu":"Vous pouvez annuler un <effet>actif/passif</effet> d'un <steuf>Steuf</steuf> équipé."},
                        {"contenu":"Cela durera tant qu'il sera équipé, placez <conso>Poudre d'altération</conso> sur l'<effet>effet</effet> affecté pendant cette durée."}
                    ]
                },
                "citation":"« Personne n'est dupe, on sait tous que vous pensez à vous maquiller avec. »"
            },
            {
                "nombre":"2",
                "edition":"conte",
                "nom":"Piège à loup",
                "type":"conso",
                "illustration":"./Images/Consommables/piege_loup.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":[
                    {
                        "nature":"passif",
                        "nom":"« Anti-vol »",
                        "effet":[
                            {"contenu":"Lorsqu'on tente de vous voler une carte en main."},
                            {"contenu":"Défaussez cette carte à la place. Le voleur reçoit 1 <blessure>Blessure</blessure>."}]
                        }
                ],
                "citation":"« Il y a ceux avec des oursins dans les poches et ceux qui prennent des mesures <u>vraiment</u> dissuasives. »"
            },
            {
                "nombre":"2",
                "edition":"conte",
                "nom":"Flacon de salive d'hydre",
                "type":"conso",
                "illustration":"./Images/Consommables/salive_hydre.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Blague décapante",
                    "effet":{
                        "contenu":"Selon la cible : ",
                        "enfants":[
                            {"contenu":"Le <perso>Personnage</perso> ciblé subit 1 <blessure>Blessure</blessure>."},
                            {"contenu":"Le <steuf>Steuf</steuf> ciblé est défaussé."}
                        ]
                    }
                },
                "citation":"« Cela dissout tout, sauf son flacon. Incompréhensible. »"
            },
            {
                "edition":"conte",
                "nom":"Coeur de drake",
                "type":"conso",
                "illustration":"./Images/Consommables/coeur_drake.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Revigoré (1 tour)",
                    "effet":{"contenu":"+2 d'attaque et de défense.<span class='passif'>Digestion d'abat (2 tours) : -1 d'attaque et de défense."}
            }
                ,
                "citation":"« Coeur de drake, pas Drake. On parle du poulet volant écailleux préhistorique cracheur de feu. »"
            },
            {
                "edition":"conte",
                "nom":"Potion de bras très-très-long",
                "type":"conso",
                "illustration":"./Images/Consommables/potion_bras_long.jpg",
                "caracteristiques":[
                    {"nature":"conso-icon","montant":""},
                    {"nature":"or-icon","montant":"5"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Les yeux plus gros que les bras",
                    "effet":[
                        {"contenu":"Vous piochez 3 <steuf>Steuf</steuf>."},
                        {"contenu":"Conserver 1 <steuf>Steuf</steuf> puis défaussez les 2 autres."},
                    ]
                },
                "citation":"« Ça serait pratique pour se lacer les chaussures sans se baisser, mais il n'y aurait pas de vêtement à votre taille. »"
            }]
    };
localStorage.setItem('data', JSON.stringify(data));
})()