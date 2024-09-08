package com.formes;

public class Rectangle {
    private int longueur;
    private int largeur;

    public Rectangle(int longueur, int largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    public void affiche() {
        System.out.println("Je suis un rectangle : j'ai une longueur de " + longueur + " cm et une largeur de " + largeur + " cm.");
    }
}
