package com.formes;

public class Triangle {
    private int cote;

    public Triangle(int cote) {
        this.cote = cote;
    }

    public Triangle() {
        this.cote = 6; 
    }

    public void affiche() {
        System.out.println("Je suis un triangle équilatéral avec 3 côtés égaux de " + cote + " cm.");
    }
}
