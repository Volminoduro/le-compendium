import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main
{
    public static int HAUTEUR_COTE = 3;
    public static int LARGEUR_COTE = 3;

    // Position vide
    public static Position n = new Position();

    // public static Position[][] plateau = new Position[HAUTEUR_COTE*LARGEUR_COTE][HAUTEUR_COTE*LARGEUR_COTE];
    public static Position[][] plateau ={
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    {n, n, n, n, n, n, n, n, n,},
    };

    public static void main(String[] args)
    {

        boolean solutionTrouvee = false;
        long startTime = System.nanoTime();

        initialisationTableau();

        System.out.println("Plateau - Longueur : "+plateau.length+" Largeur : "+plateau[0].length);

        afficherTableau();

        long endTime = System.nanoTime();
        long duration = (endTime - startTime);

        while (!solutionTrouvee && duration > 100000000*1000000){

            // Tant que je n'ai pas trouvé la solution, je continue de parcourir
            for(int i=0; i<plateau.length; i++) {
                for(int j=0; j<plateau[i].length; j++) {
                    // Si je n'ai pas déjà un chiffre valide
                    Position positionActuelle = plateau[i][j];
                    if(0 != positionActuelle.getChiffreValide()){
                        // Pour chaque possibilité que j'ai
                        for(int chiffrePossible : positionActuelle.getChiffresPossibles()){
                            boolean chiffreTrouveAilleurs = false;
                            // Je vérifie si elle n'existe pas ailleurs dans les chiffres valides tant que je ne la trouve pas (en passant d'abord par la zone)
                            // Si je la trouve ailleurs
                            if (trouverChiffreDansLaZone(i, j, chiffrePossible) ||
                                    trouverChiffreDansLaLigne(i, j, chiffrePossible, false) ||
                                    trouverChiffreDansLaLigne(i, j, chiffrePossible, true)){
                                // je la supprime de mes possibilités, et de la zone, et des lignes.
                                supprimerChiffrePossibleDeZone(i, j, chiffrePossible);
                                supprimerChiffrePossibleDesLignes(i, j, chiffrePossible);
                                chiffreTrouveAilleurs = true;
                            }
                            // Si je ne la trouve pas
                            if(!chiffreTrouveAilleurs){
                                positionActuelle.setChiffreValide(chiffrePossible);
                            }
                        }
                    }
                }
            }
            // Timing
            endTime = System.nanoTime();
            duration = (endTime - startTime);

            solutionTrouvee = true;
        }

        endTime = System.nanoTime();
        duration = (endTime - startTime);

        System.out.println("Solution trouvée : "+solutionTrouvee+" temps de traitement : "+duration);

        afficherTableau();
    }

    public static void supprimerChiffrePossibleDeZone(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        for(int compteurVertical = 0; compteurVertical< HAUTEUR_COTE; compteurVertical++){
            for(int compteurHorizontal = 0; compteurHorizontal< LARGEUR_COTE; compteurHorizontal++){
                List<Integer> listeModifiee = plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffresPossibles();
                if(listeModifiee.contains(chiffreCherche)){
                    listeModifiee.remove(chiffreCherche);
                }
                plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].setChiffresPossibles(listeModifiee);
            }
        }
    }

    public static void supprimerChiffrePossibleDesLignes(int positionVerticalDepart, int positionHorizontalDepart, int chiffreCherche){
        for(int compteurVertical=0;compteurVertical<plateau.length;compteurVertical++){
            supprimerChiffreDuneListe(compteurVertical, positionHorizontalDepart, chiffreCherche);
        }
        for(int compteurHorizontal=0;compteurHorizontal<plateau.length;compteurHorizontal++){
            supprimerChiffreDuneListe(positionVerticalDepart, compteurHorizontal, chiffreCherche);
        }
    }

    public static void supprimerChiffreDuneListe(int positionVertical, int positionHorizontal, int chiffreCherche){
        List<Integer> listeModifiee = plateau[positionVertical][positionHorizontal].getChiffresPossibles();
        if(listeModifiee.contains(chiffreCherche)){
            listeModifiee.remove(chiffreCherche);
        }
        plateau[positionVertical][positionHorizontal].setChiffresPossibles(listeModifiee);
    }

    public static boolean trouverChiffreDansLaLigne(int positionVerticalDepart, int positionHorizontalDepart, int ChiffreCherche, boolean rechercheHorizontal){
        boolean trouve = false;
        int incrementRecherche = 0, incrementHorizontal = 0, incrementVertical = 0, pointDeDepartHorizontal = 0, pointDeDepartVertical = 0, positionANePasInspecter;

        if(rechercheHorizontal){
            incrementHorizontal++;
            pointDeDepartVertical=positionVerticalDepart;
            positionANePasInspecter=positionHorizontalDepart;
        }
        else{
            incrementVertical++;
            pointDeDepartHorizontal=positionHorizontalDepart;
            positionANePasInspecter=positionVerticalDepart;
        }
        while(incrementRecherche<plateau.length && !trouve){
            incrementRecherche++;
            if (incrementVertical*incrementRecherche!=positionANePasInspecter){
                if(plateau[pointDeDepartVertical+(incrementVertical*incrementRecherche)][pointDeDepartHorizontal+(incrementHorizontal*incrementRecherche)]
                        .getChiffresPossibles().contains(positionHorizontalDepart)){
                    trouve = true;
                }
            }
        }
        return trouve;
    }

    public static boolean trouverChiffreDansLaZone(int positionVerticalDepart, int positionHorizontalDepart, int ChiffreCherche){
        boolean trouve = false;
        int compteurVertical = 0, compteurHorizontal = 0;
        // Cela me donne le début de la zone
        Map<String, Integer> debutDeZone = getDebutDeZone(positionVerticalDepart, positionHorizontalDepart);

        while(!trouve && compteurVertical< HAUTEUR_COTE){
            while(!trouve && compteurHorizontal< LARGEUR_COTE){
                if(plateau[debutDeZone.get("HAUTEUR")+compteurVertical][debutDeZone.get("LARGEUR")+compteurHorizontal].getChiffresPossibles().contains(ChiffreCherche)){
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

        positionVerticalDepartZone = positionVerticalDepart - (positionVerticalDepart % HAUTEUR_COTE);
        positionHorizontalDepartZone = positionHorizontalDepart - (positionHorizontalDepart % LARGEUR_COTE);

        positionDeRetours.put("HAUTEUR", positionVerticalDepartZone);
        positionDeRetours.put("LARGEUR", positionHorizontalDepartZone);

        return positionDeRetours;
    }

    public boolean isSudokuComplete(){
        boolean isComplete = true;
        int compteurVertical = 0, compteurHorizontal = 0;
        while(isComplete && compteurVertical< HAUTEUR_COTE * HAUTEUR_COTE){
            while(isComplete && compteurHorizontal< LARGEUR_COTE){
                if(0 == plateau[compteurVertical][compteurHorizontal].getChiffreValide()){
                    isComplete=false;
                }
                compteurHorizontal++;
            }
            compteurVertical++;
        }
        return isComplete;
    }

    public static void initialisationTableau(){
        plateau[0][0] = new Position(5);plateau[0][1] = new Position(3);plateau[0][4] = new Position(7);
        plateau[1][0] = new Position(6);plateau[1][3] = new Position(1);plateau[1][4] = new Position(9);plateau[1][5] = new Position(5);
        plateau[2][1] = new Position(9);plateau[2][2] = new Position(8);plateau[2][7] = new Position(6);
        plateau[3][0] = new Position(8);plateau[3][4] = new Position(6);plateau[3][8] = new Position(3);
        plateau[4][0] = new Position(4);plateau[4][3] = new Position(8);plateau[4][5] = new Position(3);plateau[4][8] = new Position(1);
        plateau[5][0] = new Position(7);plateau[5][4] = new Position(2);plateau[5][8] = new Position(6);
        plateau[6][1] = new Position(6);plateau[6][6] = new Position(2);plateau[6][7] = new Position(8);
        plateau[7][3] = new Position(4);plateau[7][4] = new Position(1);plateau[7][5] = new Position(9);plateau[7][8] = new Position(5);
        plateau[8][4] = new Position(8);plateau[8][7] = new Position(7);plateau[8][8] = new Position(9);
    }

    public static void afficherTableau(){
        System.out.printf("Affichage du sudoku : \n");
        // Affichage du tableau
        for(int compteurVertical = 0; compteurVertical< HAUTEUR_COTE * HAUTEUR_COTE; compteurVertical++){
            for(int compteurHorizontal = 0; compteurHorizontal< LARGEUR_COTE * LARGEUR_COTE; compteurHorizontal++){
                System.out.printf(plateau[compteurVertical][compteurHorizontal].getChiffreValide()+", ");
            }
            System.out.printf("\n");
        }
    }

}

