package second.version;

import java.util.HashMap;
import java.util.Map;

public class FindUtilities {

    public static boolean trouverChiffreDansLaLigneVerticale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, longueurduCote;

        longueurduCote = Main.HAUTEUR_COTE * Main.HAUTEUR_COTE;

        while(incrementRecherche<longueurduCote){
            if (incrementRecherche!=positionVerticalDepart ){
                if(Main.plateau[0+(1*incrementRecherche)][positionHorizontalDepart]
                        .getChiffreValide() == chiffreCherche){
                    return true;
                }
            }
            incrementRecherche++;
        }
        return false;
    }

    public static boolean trouverChiffrePossibleDansLaLigneVerticale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, longueurduCote;

        longueurduCote = Main.HAUTEUR_COTE * Main.HAUTEUR_COTE;

        while(incrementRecherche<longueurduCote){
            if (incrementRecherche!=positionVerticalDepart ){
                if(Main.plateau[0+(1*incrementRecherche)][positionHorizontalDepart]
                        .getChiffresPossibles().contains(chiffreCherche)){
                    return true;
                }
            }
            incrementRecherche++;
        }
        return false;
    }

    public static boolean trouverChiffreDansLaLigneHorizontale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, longueurduCote;

        longueurduCote = Main.LARGEUR_COTE * Main.LARGEUR_COTE;

        while(incrementRecherche<longueurduCote){
            if (incrementRecherche!=positionHorizontalDepart ){
                if(Main.plateau[positionVerticalDepart][0+(1*incrementRecherche)]
                        .getChiffreValide() == chiffreCherche){
                    return true;
                }
            }
            incrementRecherche++;
        }
        return false;
    }

    public static boolean trouverChiffrePossibleDansLaLigneHorizontale(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int incrementRecherche = 0, longueurduCote;

        longueurduCote = Main.LARGEUR_COTE * Main.LARGEUR_COTE;

        while(incrementRecherche<longueurduCote){
            if (incrementRecherche!=positionHorizontalDepart ){
                if(Main.plateau[positionVerticalDepart][0+(1*incrementRecherche)]
                        .getChiffresPossibles().contains(chiffreCherche)){
                    return true;
                }
            }
            incrementRecherche++;
        }
        return false;
    }

    public static boolean trouverChiffreDansLaZone(int positionVerticalDepart, int positionHorizontalDepart, int ChiffreCherche){
        int compteurVertical = 0, compteurHorizontal;
        // Cela me donne le début de la zone
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        while(compteurVertical< Main.HAUTEUR_COTE){
            compteurHorizontal = 0;
            while(compteurHorizontal< Main.LARGEUR_COTE){
                if(Main.plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffreValide() == ChiffreCherche){
                    return true;
                }
                compteurHorizontal++;
            }
            compteurVertical++;
        }

        return false;
    }

    public static boolean trouverChiffrePossibleDansLaZone(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        int compteurVertical = 0, compteurHorizontal = 0;
        // Cela me donne le début de la zone
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        while(compteurVertical< Main.HAUTEUR_COTE){
            compteurHorizontal=0;
            while(compteurHorizontal< Main.LARGEUR_COTE){
                if(Main.plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffresPossibles().contains(chiffreCherche)){
                    return true;
                }
                compteurHorizontal++;
            }
            compteurVertical++;
        }
        return false;
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
