package com.formes;

public class Main {
    public static void main(String[] args) {
        Formes carre = new Carre(10);  
        Formes cercle = new Cercle(7); 
        Formes triangle = new Triangle(3, 4, 5);
        Formes rectangle = new Rectangle(5, 9); 

        System.out.println(carre.toString());
        System.out.println(cercle.toString());
        System.out.println(triangle.toString());
        System.out.println(rectangle.toString());
    }
}
