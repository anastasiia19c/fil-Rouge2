package com.formes;

public class Main {
    public static void main(String[] args) {
        Carre carre = new Carre(9);  
        Cercle cercle = new Cercle(7); 
        Triangle triangle = new Triangle(3, 4, 5);
        Rectangle rectangle = new Rectangle(5, 9); 

        System.out.println(carre.toString());
        System.out.println(cercle.toString());
        System.out.println(triangle.toString());
        System.out.println(rectangle.toString());
    }
}
