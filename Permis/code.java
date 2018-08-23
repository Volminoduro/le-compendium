Comment définir les zones ?

https://www.khanacademy.org/math/multivariable-calculus/thinking-about-multivariable-function/ways-to-represent-multivariable-functions/a/multidimensional-graphs

Ma position actuelle % (modulo) Taille zone, à partir de là j'obtiens 0, 1, 2.

Si 0 : je prends 1 et 2 (+1, +2), je fais Taille zone - mon modulo - 1, je dois atteindre ?
Si 1 : je prends 0 et 2 (-1, +1)
Si 2 : je prends 1 et 0 (-1, -2)

CODE : 

import java.lang.Math;
import java.util.List;
import java.util.ArrayList;

// one class needs to have a main() method
public class HelloWorld
{
  public static int TAILLE_ZONE = 3;
  
  // arguments are passed using the text field below this editor
  public static void main(String[] args)
  {
    
    int[][] plateau = new int[TAILLE_ZONE*TAILLE_ZONE][TAILLE_ZONE*TAILLE_ZONE];
    int[][] plateauNul = new int[TAILLE_ZONE*TAILLE_ZONE][TAILLE_ZONE*TAILLE_ZONE];
    boolean solutionTrouvee = false;
    long startTime = System.nanoTime();
    
    
    System.out.println("Plateau - Longueur : "+plateau.length+" Largeur : "+plateau[0].length);
    
    Position pos = new Position();
    
    System.out.println(pos.getChiffresPossibles().size());
    
    while (!solutionTrouvee){
      solutionTrouvee = true;
      // Tant que je n'ai pas trouvé la solution, je continue de parcourir

        // Pour chaque case de mon tableau
            // Si je n'ai pas déjà un chiffre valide
            // Pour chaque possibilité que j'ai
                // Je vérifie si elle n'existe pas ailleurs dans les chiffres valides tant que je ne la trouve pas (en passant d'abord par la zone)
                    // Si je la trouve ailleurs, je la supprime de mes possibilités
                // Si je ne la trouve pas
                // Je valide ce chiffre
    }
    
    long endTime = System.nanoTime();

	long duration = (endTime - startTime);
    
    System.out.println(duration);
  }
  
    public class Position{
       
      public int chiffreValide;
      
      public List<Integer> chiffresPossibles;
      
      public Position(){
        chiffresPossibles = new ArrayList<Integer>();
        for(int i=0;i<HelloWorld.TAILLE_ZONE;i++){
       		chiffresPossibles.add(i);
        }
      }
      
      public Position(Integer chiffre){
        setChiffreValide(chiffre);
      }
      
      public int getChiffreValide(){
      	return this.chiffreValide;
      }
      
      public void setChiffreValide(Integer chiffre){
        this.chiffreValide=chiffre;
        chiffresPossibles.clear();
      }
      
      public List<Integer> getChiffresPossibles(){
        return this.chiffresPossibles;
      }
      
      public void setChiffresPossibles(List<Integer> chiffresPossibles){
        this.chiffresPossibles = chiffresPossibles;
      }
      
    }
}

