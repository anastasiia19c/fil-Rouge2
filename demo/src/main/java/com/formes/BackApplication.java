package com.formes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.formes.model.Carre;
import com.formes.model.Cercle;
import com.formes.model.Hexagone;
import com.formes.model.Pentagone;
import com.formes.model.Rectangle;
import com.formes.model.Triangle;

@SpringBootApplication
public class BackApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackApplication.class, args);
        TriForme collection = new TriForme();

        Forme carre = new Carre(10, "rouge", 2, 2);  
        Forme cercle = new Cercle(7, "bleu", 3,7); 
        Forme triangle = new Triangle(3, 4, 5, 5, 9, "jaune", 4,9);
        Forme rectangle = new Rectangle(5, 9, "rouge", 1, 3); 
        Forme pentagone = new Pentagone(9, "bleu", 3, 0); 
        Forme hexagone = new Hexagone(4, "vert", 4,8); 

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);
        collection.ajouterForme(triangle);
        collection.ajouterForme(rectangle);
        collection.ajouterForme(pentagone);
        collection.ajouterForme(hexagone);

        System.out.println(collection.toString());
        
    }
}