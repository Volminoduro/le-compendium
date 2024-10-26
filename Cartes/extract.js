$(document).ready(function() {

  var scripts = document.getElementsByTagName('script');
  var collection = scripts[scripts.length-1].getAttribute('collection');

  var data = JSON.parse(localStorage.getItem('data'));
  var mainContainer = $("#myData")[0];
  for (var i = 0; i < data.cartes.length; i++) {

    var nbExemplaires = (!!data.cartes[i].nombre) ?
      data.cartes[i].nombre : 1;

    for(var nombre = 0; nombre < nbExemplaires; nombre++){
        if(!collection || data.cartes[i].collection === collection){
          var carte = $("<div></div>"); 
          $(carte).addClass('carte ' + data.cartes[i].type + ' ' + data.cartes[i].collection);
              
          $(carte).append(creerEntete(data.cartes[i]));
          
          $(carte).append(creerDescription(data.cartes[i]));
          
          $(mainContainer).append(carte);
        }
    }
  }
});

function creerEntete(carte){
  var entete = $("<entete></entete>");
    
  var nomDiv = $("<div></div>").addClass("nom").html(carte.nom);
  $(entete).append(nomDiv);
  
  var imgDiv = $("<div></div>").addClass("img").html("<img src='"+carte.illustration+"' />");
  $(entete).append(imgDiv);
  
  // On traite la boucle de fanion
  $(entete).append(getAllCaracteristiques(carte.caracteristiques));

  return entete;
}

function creerDescription(carte){
  var description  = $("<description></description>");
      
  $(description).append(getAllEffects(carte.effets));

  $(description).append(creerCitation(carte));

  return description;
}

function creerCitation(carte){
  return $("<div></div>").addClass("citation").html("&laquo; "+carte.citation+" &raquo;");
}

/* RECUPERER TOUS LES FANION */
function getAllCaracteristiques(caracteristiques){
  var fanion = $("<div></div>").addClass("fanion");
  
  $(caracteristiques).each(function(i,e){
    var carac = $('<div></div>').addClass("carac");
    var stat = $('<div></div>').addClass("stat");
    if(e.montant){
      $(stat).append($('<div></div>').addClass("montant").html(e.montant)[0]);
      $(stat).append($('<div></div>').addClass("nature").html(e.nature)[0]);
    } else {
      $(stat).append($('<div></div>').addClass("nature nature-solo").html(e.nature)[0]);
    }    
    $(carac).append(stat[0]);
    $(fanion).append(carac[0]);
  }
  );
  
  return fanion;
}

/* RECUPERER TOUT LES EFFETS */
function getAllEffects(effets){
  var effetsHtml = $("<div></div>");
  
  $(effets).each(function(i,e){
    var nomEffet = $('<div></div>').addClass("titre-effet "+e.nature).html(e.nom);
    
    var descEffet = $('<div></div>').addClass("descEffet").html("<ul>"+getSubEffects(e.effet)+"</ul>");
    
    $(effetsHtml).append(nomEffet[0]);
    $(effetsHtml).append(descEffet[0]);
  });
  
  return $(effetsHtml).find('>div');
}
  
/* RECUPERER TOUS LES SOUS EFFETS EN RECURSIF */
function getSubEffects(sousEffets){
  var content = ""; 
  
  $(sousEffets).each(function(i,e){
    var li = "<li>"+e.contenu+"</li>";
    content += li;
    
    if(!!e.enfants){
      content += "<ul>"+getSubEffects(e.enfants)+"</ul>";
    }
  });
  
  return content;
}