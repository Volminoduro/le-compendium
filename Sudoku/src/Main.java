import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Main
{
    public static int HAUTEUR_COTE = 3;
    public static int LARGEUR_COTE = 3;

    // public static Position[][] plateau = new Position[HAUTEUR_COTE*LARGEUR_COTE][HAUTEUR_COTE*LARGEUR_COTE];
    public static Position[][] plateau ={
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),},
            {new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(), new Position(),}
    };

    public static void main(String[] args)
    {

        boolean solutionTrouvee = false;
        long startTime = System.nanoTime();

        initialisationTableau();

        System.out.println("Plateau - Longueur : "+plateau.length+" Largeur : "+plateau[0].length);

        afficherTableau();

        long endTime = System.nanoTime();
        double duration = (endTime - startTime) / 1000000000.0;

        while (!solutionTrouvee && duration  < 60){

            Position[][] plateauItere = plateau;
            // Tant que je n'ai pas trouvé la solution, je continue de parcourir
            for(int i=0; i<plateauItere.length; i++) {
                for(int j=0; j<plateauItere[i].length; j++) {
                    // Si je n'ai pas déjà un chiffre valide
                    Position positionActuelle = plateauItere[i][j];
                    if(0 == positionActuelle.getChiffreValide()){
                        // Pour chaque possibilité que j'ai
                        boolean chiffreTrouveAilleurs = false;
                        int indexParcoursChiffrePossible = 0, chiffrePossible;
                        do{
                            try{
                                chiffreTrouveAilleurs = false;
                                chiffrePossible = positionActuelle.getChiffresPossibles().get(indexParcoursChiffrePossible);
                                // Je vérifie si elle n'existe pas ailleurs dans les chiffres valides tant que je ne la trouve pas (en passant d'abord par la zone)
                                // Si je la trouve ailleurs
                                if (FindUtilities.trouverChiffreDansLaZone(i, j, chiffrePossible) ||
                                        FindUtilities.trouverChiffreDansLaLigneVerticale(i, j, chiffrePossible) ||
                                        FindUtilities.trouverChiffreDansLaLigneHorizontale(i, j, chiffrePossible)){
                                    // je la supprime de mes possibilités, et de la zone, et des lignes.
                                    if(FindUtilities.trouverChiffreDansLaZone(i, j, chiffrePossible)){
                                        SupprUtilities.supprimerChiffrePossibleDeZone(i, j, chiffrePossible);
                                    }
                                    if(FindUtilities.trouverChiffreDansLaLigneVerticale(i, j, chiffrePossible)){
                                        SupprUtilities.supprimerChiffreDansLaLigneVerticale(i, j, chiffrePossible);
                                    }
                                    if(FindUtilities.trouverChiffreDansLaLigneHorizontale(i, j, chiffrePossible)){
                                        SupprUtilities.trouverChiffreDansLaLigneHorizontale(i, j, chiffrePossible);
                                    }
                                    indexParcoursChiffrePossible--;
                                    chiffreTrouveAilleurs = true;
                                }
                                // Si je la trouve dans les possibilités des autres cases
                                // TODO : Erreur de contrôle (si je n'ai pas trouvé, et que ce chiffre n'est pas l'unique solution soit de la zone, soit de la ligne verticale soit de la ligne horizontale
                                // Si je ne la trouve pas
                                if(!chiffreTrouveAilleurs &&
                                        (!FindUtilities.trouverChiffrePossibleDansLaZone(i, j, chiffrePossible) ||
                                        !FindUtilities.trouverChiffrePossibleDansLaLigneVerticale(i, j, chiffrePossible)||
                                        !FindUtilities.trouverChiffrePossibleDansLaLigneHorizontale(i, j, chiffrePossible))){
                                    positionActuelle.setChiffreValide(chiffrePossible);
                                    plateau[i][j]=positionActuelle;
                                    afficherTableau();
                                }
                                indexParcoursChiffrePossible++;
                            } catch (Exception e){
                                System.out.println(e);
                            }
                        }
                        while(chiffreTrouveAilleurs && indexParcoursChiffrePossible<positionActuelle.getChiffresPossibles().size());
                    }
                }
            }
            // Timing
            endTime = System.nanoTime();
            duration = (endTime - startTime) / 1000000000.0;

            solutionTrouvee = isSudokuComplete();
        }

        endTime = System.nanoTime();
        duration = (endTime - startTime) / 1000000000.0;

        System.out.println("Solution trouvée : "+solutionTrouvee+" temps de traitement : "+duration);

        afficherTableau();
    }

    public static boolean isSudokuComplete(){
        boolean isComplete = true;
        int compteurVertical = 0, compteurHorizontal = 0;
        while(isComplete && compteurVertical< HAUTEUR_COTE * HAUTEUR_COTE){
            while(isComplete && compteurHorizontal< LARGEUR_COTE * LARGEUR_COTE){
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

