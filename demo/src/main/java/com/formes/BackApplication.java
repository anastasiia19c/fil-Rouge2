package com.formes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.formes.model.Carre;
import com.formes.model.Cercle;
import com.formes.model.Forme;
import com.formes.model.Hexagone;
import com.formes.model.Pentagone;
import com.formes.model.Rectangle;
import com.formes.model.TriForme;
import com.formes.model.Triangle;

@SpringBootApplication
public class BackApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackApplication.class, args);
        TriForme triParForme = new TriForme();
        TriForme triParCouleur = new TriForme();
        TriForme triParTaille = new TriForme();

        Forme carre = new Carre(10, "rouge", 2, 2);  
        Forme cercle = new Cercle(7, "bleu", 3,7); 
        Forme triangle = new Triangle(3, 4, 5, 5, 9, "jaune", 4,9);
        Forme rectangle = new Rectangle(5, 9, "rouge", 1, 3); 
        Forme pentagone = new Pentagone(9, "bleu", 3, 0); 
        Forme hexagone = new Hexagone(4, "vert", 4,8); 

        Forme carreBleu = new Carre(10, "bleu", 2, 2);  
        Forme cercleRouge = new Cercle(7, "rouge", 3,7); 
        Forme triangleJaune = new Triangle(3, 4, 5, 5, 9, "jaune", 4,9);
        Forme rectangleVert = new Rectangle(5, 9, "vert", 1, 3); 
        Forme pentagoneBleu = new Pentagone(9, "bleu", 3, 0); 
        Forme hexagoneRouge = new Hexagone(4, "rouge", 4,8); 

        Forme carrePetit = new Carre(2, "bleu", 2, 2);  
        Forme cercleMoyen = new Cercle(6, "rouge", 3,7); 
        Forme triangleGrand = new Triangle(12, 4, 5, 5, 9, "jaune", 4,9);
        Forme rectanglePetit = new Rectangle(2, 9, "vert", 1, 3); 
        Forme pentagoneMoyen = new Pentagone(6, "bleu", 3, 0); 
        Forme hexagoneGrand = new Hexagone(12, "rouge", 4,8); 

        triParForme.ajouterForme(carre);
        triParForme.ajouterForme(cercle);
        triParForme.ajouterForme(triangle);
        triParForme.ajouterForme(rectangle);
        triParForme.ajouterForme(pentagone);
        triParForme.ajouterForme(hexagone);

        triParCouleur.ajouterForme(carreBleu);
        triParCouleur.ajouterForme(cercleRouge);
        triParCouleur.ajouterForme(triangleJaune);
        triParCouleur.ajouterForme(rectangleVert);
        triParCouleur.ajouterForme(pentagoneBleu);
        triParCouleur.ajouterForme(hexagoneRouge);

        triParTaille.ajouterForme(carrePetit);
        triParTaille.ajouterForme(cercleMoyen);
        triParTaille.ajouterForme(triangleGrand);
        triParTaille.ajouterForme(rectanglePetit);
        triParTaille.ajouterForme(pentagoneMoyen);
        triParTaille.ajouterForme(hexagoneGrand);

        System.out.println(triParForme.toString());
        
    }
}