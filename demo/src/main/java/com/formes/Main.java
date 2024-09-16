package com.formes;

public class Main {
    public static void main(String[] args) {
        TriFormes collection = new TriFormes();

        Formes carre = new Carre(10, "rouge", 2, 2);  
        Formes cercle = new Cercle(7, "bleu", 3,7); 
        Formes triangle = new Triangle(3, 4, 5, 5, 9, "jaune", 4,9);
        Formes rectangle = new Rectangle(5, 9, "rouge", 1, 3); 
        Formes pentagone = new Pentagone(9, "bleu", 3, 0); 
        Formes hexagone = new Hexagone(4, "vert", 4,8); 

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);
        collection.ajouterForme(triangle);
        collection.ajouterForme(rectangle);
        collection.ajouterForme(pentagone);
        collection.ajouterForme(hexagone);

        System.out.println(collection.toString());
    }
}
