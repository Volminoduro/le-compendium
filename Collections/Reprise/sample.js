(function(){
    var data = {
        "cartes":[
            {
                "edition":"conte",
                "nom":"Chat chatoyant inchaichichable",
                "type":"epique",
                "illustration":"../Conte/Images/Steufs/chat_chatoyant.jpg",
                "caracteristiques":[
                    {
                        "nature":"accessoire-icon",
                        "montant":""
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    },
                    {
                        "nature":"defense-icon",
                        "montant":"-5"
                    },
                    {
                        "nature":"<or-icon></or-icon>",
                        "montant":"5"
                    }
                ],
                "effets":[
                    {
                        "nature":"actif",
                        "nom":"« Ah, mais ch'est chiant ! »",
                        "effet":[
                            {
                                "contenu":"Vous pouvez relancer votre jet de défense une deuxième fois."
                            }
                        ]
                    },
                    {
                        "nature":"passif",
                        "nom":"Compagnon (1 <blessure-icon></blessure-icon>)"
                    }
    
                ],
                "citation":"« Quand quelque chose vient vous carresser la jambe, parfois, ça n'est pas juste votre imagination. »"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()