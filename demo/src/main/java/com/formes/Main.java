package com.formes;

public class Main {
    public static void main(String[] args) {
        Formes carre = new Carre(10);  
        Formes cercle = new Cercle(7); 
        Formes triangle = new Triangle(4, 4, 4, 5, 9);
        Formes rectangle = new Rectangle(5, 9); 
        Formes pentagone = new Pentagone(9); 
        Formes hexagone = new Hexagone(4); 

        System.out.println(carre.toString());
        System.out.println(cercle.toString());
        System.out.println(triangle.toString());
        System.out.println(rectangle.toString());
        System.out.println(pentagone.toString());
        System.out.println(hexagone.toString());
    }
}
