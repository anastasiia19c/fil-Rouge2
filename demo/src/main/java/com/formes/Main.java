package com.formes;

public class Main {
    public static void main(String[] args) {
        TriFormes collection = new TriFormes();
        TriFormes collection2 = new TriFormes();

        Formes carre = new Carre(10, "rouge");  
        Formes cercle = new Cercle(7, "bleu"); 
        Formes triangle = new Triangle(4, 4, 4, 5, 9, "vert");
        Formes rectangle = new Rectangle(5, 9, "rouge"); 
        Formes pentagone = new Pentagone(9, "bleu"); 
        Formes hexagone = new Hexagone(4, "vert"); 

        collection.ajouterForme(carre);
        collection.ajouterForme(cercle);
        collection.ajouterForme(triangle);
        collection.ajouterForme(rectangle);
        collection.ajouterForme(pentagone);
        collection.ajouterForme(hexagone);

        collection2.ajouterForme(carre);

        System.out.println(carre.toString());
        System.out.println(cercle.toString());
        System.out.println(triangle.toString());
        System.out.println(rectangle.toString());
        System.out.println(pentagone.toString());
        System.out.println(hexagone.toString());
        System.out.println(collection.toString());
        System.out.println(collection2.toString());
    }
}
