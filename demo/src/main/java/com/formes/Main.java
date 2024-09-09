package com.formes;

public class Main {
    public static void main(String[] args) {
        Carre carre = new Carre(5);          
        Rectangle rectangle = new Rectangle(8, 4); 
        Cercle cercle = new Cercle(8);   
        Triangle triangle = new Triangle (6);      

        carre.affiche();
        rectangle.affiche();
        cercle.affiche();
        triangle.affiche();
    }
}
