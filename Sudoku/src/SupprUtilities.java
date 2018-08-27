import java.util.List;
import java.util.Map;

public class SupprUtilities {

    public static void supprimerChiffrePossibleDeZone(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        Map<String, Integer> debutDeZone = FindUtilities.getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        for(int compteurVertical = 0; compteurVertical< Main.HAUTEUR_COTE; compteurVertical++){
            for(int compteurHorizontal = 0; compteurHorizontal< Main.LARGEUR_COTE; compteurHorizontal++){
                supprimerChiffreDuneListe(debutDeZone.get("HAUTEUR")+compteurVertical, debutDeZone.get("LARGEUR")+compteurHorizontal, chiffreCherche);
            }
        }
        System.out.println("");
    }

    public static void supprimerChiffreDansLaLigneVerticale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote;

        incrementVertical++;
        pointDeDepartHorizontal=positionHorizontalDepart;
        longueurduCote = Main.HAUTEUR_COTE * Main.HAUTEUR_COTE;

        while(incrementRecherche<longueurduCote){
            supprimerChiffreDuneListe(pointDeDepartVertical+(incrementVertical*incrementRecherche),
    pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche),
                    chiffreCherche);
            incrementRecherche++;
        }
    }

    public static void supprimerChiffreDansLaLigneHorizontale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote;

        incrementHorizontal++;
        pointDeDepartVertical=positionVerticalDepart;
        longueurduCote = Main.LARGEUR_COTE * Main.LARGEUR_COTE;

        while(incrementRecherche<longueurduCote){
            supprimerChiffreDuneListe(pointDeDepartVertical+(incrementVertical*incrementRecherche),
                    pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche),
                    chiffreCherche);
            incrementRecherche++;
        }
    }

    public static void supprimerChiffreDuneListe(int positionVertical, int positionHorizontal, int chiffreCherche){
        List<Integer> listeModifiee = Main.plateau[positionVertical][positionHorizontal].getChiffresPossibles();
        if(listeModifiee.contains(chiffreCherche)){
            listeModifiee.remove(listeModifiee.indexOf(chiffreCherche));
        }
        Main.plateau[positionVertical][positionHorizontal].setChiffresPossibles(listeModifiee);
    }
}
