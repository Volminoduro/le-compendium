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
                        "montant":""
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
                            "enfants":[{"contenu":"Choisissez un emplacement de <steuf>Steuf</steuf>, le <steuf>Steuf</steuf> présent ou à venir ne pourra être défaussé ou vendu."}]},
                        ]
                    },
                    {
                        "nature":"actif",
                        "nom":"Originelleté : <perso>Meia la guêpe</perso>",
                        "effet":[
                            {"contenu":"Vous <soin>soigne</soin> d'une <blessure>blessure</blessure>."},
                        ]
                    }
    
                ],
                "citation":"« Le miel est issu d'un cycle d'ingérations et de régurgitations successives d'abeilles. Bon appétit. »"
            }
        ]
    };
    localStorage.setItem('data', JSON.stringify(data));
})()