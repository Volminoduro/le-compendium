(function(){
    var data = {
        "cartes":[
            // Consommables
            {
                "collection":"conte",
                "nom":"Bonhomme en pain d'épices",
                "type":"conso",
                "illustration":"./Images/Consommables/bonhomme_epices.jpg","caracteristiques":[
                    {"nature":"<conso-icon></conso-icon>"},
                    {"nature":"<or-icon></or-icon>","montant":"2"}
                ],
                "effets":[
                        {
                            "nature":"actif",
                            "nom":"Petite douceur",
                            "effet":[
                                {"contenu":"Choisissez une option :",
                                "enfants":[
                                    {"contenu":"Vous <soin-icon></soin-icon> d'une <blessure-icon></blessure-icon>"},
                                    {"contenu":"S'il l'accepte, <soin-icon></soin-icon> un autre <perso>Personnage</perso> d'une <blessure-icon></blessure-icon>"}]}
                            ]
                        }
                ],
                "citation":"« Oups, on a oublié de vous dire que ce délicieux biscuit était un petit enfant victime d'un sort. Non, on plaisante...  peut-être. »"
            },
            {
                "collection":"",
                "nom":"",
                "type":"conso",
                "illustration":"./Images/Consommables/des.jpg",
                "caracteristiques":[
                    {"nature":"<conso-icon></conso-icon>"},
                    {"nature":"<or-icon></or-icon>","montant":"3"}
                ],
                "effets":
                    {"nature":"actif",
                    "nom":"Tirage mal fait",
                    "effet":[
                        {"contenu":"Utilisable pendant un lancer de dés."},
                        {"contenu":"Ajoutez 1 ou retirez 1 au lancer de dés actuel."}
                    ]
                },
                "citation":"« Si même le jeu vous permet de tricher, ça devient vraiment n'importe quoi. »"
            },
            {
                "collection":"",
                "nom":"Dés pipés",
                "type":"conso",
                "illustration":"./Images/Consommables/des.jpg",
                "caracteristiques":[
                    {"nature":"<conso-icon></conso-icon>"},
                    {"nature":"<or-icon></or-icon>","montant":"1"}
                ],
                "effets":
                    {"nature":"actif",
                    "nom":"Tirage mal fait",
                    "effet":[
                        {"contenu":"Utilisable pendant un lancer de dés."},
                        {"contenu":"Ajoutez 1 ou retirez 1 au lancer de dés actuel."}
                    ]
                },
                "citation":"« Si même le jeu vous permet de tricher, ça devient vraiment n'importe quoi. »"
            },
            {
                "collection":"",
                "nom":"Doudou du Pope",
                "type":"conso",
                "illustration":"./Images/Consommables/peluche.jpg",
                "caracteristiques":[
                    {"nature":"<conso-icon></conso-icon>"},
                    {"nature":"<or-icon></or-icon>","montant":"4"}
                ],
                "effets":{
                    "nature":"actif",
                    "nom":"Ton jeu, mes règles",
                    "effet":{"contenu":"Le résultat du tirage de dé actuel est <b>2</b>."}
                }
                ,
                "citation":"« Il faut toujours que vous preniez cela trop au sérieux. Prendre une peluche en otage, quand même. »"
            },
            
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()