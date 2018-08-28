package second.version;

import java.util.HashMap;
import java.util.Map;

public class FindUtilities {

    public static boolean trouverChiffreDansLaLigneVerticale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        boolean trouve = false;
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote, positionANePasInspecter;

        incrementVertical++;
        pointDeDepartHorizontal=positionHorizontalDepart;
        positionANePasInspecter=positionVerticalDepart;
        longueurduCote = Main.HAUTEUR_COTE * Main.HAUTEUR_COTE;

        while(incrementRecherche<longueurduCote && !trouve){
            if (incrementRecherche!=positionANePasInspecter ){
                if(Main.plateau[pointDeDepartVertical+(incrementVertical*incrementRecherche)][pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche)]
                        .getChiffreValide() == chiffreCherche){
                    trouve = true;
                }
            }
            incrementRecherche++;
        }
        return trouve;
    }

    public static boolean trouverChiffrePossibleDansLaLigneVerticale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        boolean trouve = false;
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote, positionANePasInspecter;

        incrementVertical++;
        pointDeDepartHorizontal=positionHorizontalDepart;
        positionANePasInspecter=positionVerticalDepart;
        longueurduCote = Main.HAUTEUR_COTE * Main.HAUTEUR_COTE;

        while(incrementRecherche<longueurduCote && !trouve){
            if (incrementRecherche!=positionANePasInspecter ){
                if(Main.plateau[pointDeDepartVertical+(incrementVertical*incrementRecherche)][pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche)]
                        .getChiffresPossibles().contains(chiffreCherche)){
                    trouve = true;
                }
            }
            incrementRecherche++;
        }
        return trouve;
    }

    public static boolean trouverChiffreDansLaLigneHorizontale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        boolean trouve = false;
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote, positionANePasInspecter;

        incrementHorizontal++;
        pointDeDepartVertical=positionVerticalDepart;
        positionANePasInspecter=positionHorizontalDepart;
        longueurduCote = Main.LARGEUR_COTE * Main.LARGEUR_COTE;

        while(incrementRecherche<longueurduCote && !trouve){
            if (incrementRecherche!=positionANePasInspecter ){
                if(Main.plateau[pointDeDepartVertical+(incrementVertical*incrementRecherche)][pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche)]
                        .getChiffreValide() == chiffreCherche){
                    trouve = true;
                }
            }
            incrementRecherche++;
        }
        return trouve;
    }

    public static boolean trouverChiffrePossibleDansLaLigneHorizontale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        boolean trouve = false;
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, longueurduCote, positionANePasInspecter;

        incrementHorizontal++;
        pointDeDepartVertical=positionVerticalDepart;
        positionANePasInspecter=positionHorizontalDepart;
        longueurduCote = Main.LARGEUR_COTE * Main.LARGEUR_COTE;

        while(incrementRecherche<longueurduCote && !trouve){
            if (incrementRecherche!=positionANePasInspecter ){
                if(Main.plateau[pointDeDepartVertical+(incrementVertical*incrementRecherche)][pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche)]
                        .getChiffresPossibles().contains(chiffreCherche)){
                    trouve = true;
                }
            }
            incrementRecherche++;
        }
        return trouve;
    }

    public static boolean trouverChiffreDansLaZone(int positionVerticalDepart, int positionHorizontalDepart, int ChiffreCherche){
        boolean trouve = false;
        int compteurVertical = 0, compteurHorizontal;
        // Cela me donne le début de la zone
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        while(!trouve && compteurVertical< Main.HAUTEUR_COTE){
            compteurHorizontal = 0;
            while(!trouve && compteurHorizontal< Main.LARGEUR_COTE){
                if(Main.plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffreValide() == ChiffreCherche){
                    trouve=true;
                }
                compteurHorizontal++;
            }
            compteurVertical++;
        }

        return trouve;
    }

    public static boolean trouverChiffrePossibleDansLaZone(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        boolean trouve = false;
        int compteurVertical = 0, compteurHorizontal = 0;
        // Cela me donne le début de la zone
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        while(!trouve && compteurVertical< Main.HAUTEUR_COTE){
            compteurHorizontal=0;
            while(!trouve && compteurHorizontal< Main.LARGEUR_COTE){
                if(Main.plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffresPossibles().contains(chiffreCherche)){
                    trouve=true;
                }
                compteurHorizontal++;
            }
            compteurVertical++;
        }

        return trouve;
    }

    public static Map<String, Integer> getDebutDeZone (int positionVerticalDepart, int positionHorizontalDepart){
        int positionVerticalDepartZone, positionHorizontalDepartZone;
        Map<String, Integer> positionDeRetours = new HashMap<>();

        positionVerticalDepartZone = positionVerticalDepart - (positionVerticalDepart % Main.HAUTEUR_COTE);
        positionHorizontalDepartZone = positionHorizontalDepart - (positionHorizontalDepart % Main.LARGEUR_COTE);

        positionDeRetours.put("HAUTEUR", positionVerticalDepartZone);
        positionDeRetours.put("LARGEUR", positionHorizontalDepartZone);

        return positionDeRetours;
    }
}
