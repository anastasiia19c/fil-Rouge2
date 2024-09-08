package com.formes;

public class Carre {
    private int cote;

    public Carre(int cote) {
        this.cote = cote;
    }

    public void affiche() {
        System.out.println("Je suis un carré : j'ai 4 côtés égaux de " + cote + " cm.");
    }
}
