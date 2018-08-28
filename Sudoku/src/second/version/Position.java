package second.version;

import java.util.ArrayList;
import java.util.List;

public class Position{

    public int chiffreValide;

    public List<Integer> chiffresPossibles = new ArrayList<Integer>();

    public Position(){
        chiffreValide=0;
        chiffresPossibles = new ArrayList<Integer>();
        for(int i = 1; i<(Main.HAUTEUR_COTE *Main.LARGEUR_COTE)+1; i++){
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

    public String toString(){
        return "Chiffre valide : "+this.chiffreValide;
    }

}