package com.formes;

public class Rectangle extends Formes{
    private int longueur;
    private int largeur;

    public Rectangle(int longueur, int largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    // Getter pour récupérer la longueur
    public int getLongueur() {
        return longueur;
    }

    // Setter pour modifier la longueur
    public void setLongueur(int longueur) {
        this.longueur = longueur;
    }

    // Getter pour récupérer la largeur
    public int getLargeur() {
        return largeur;
    }

    // Setter pour modifier la largeur
    public void setLargeur(int largeur) {
        this.largeur = largeur;
    }

    @Override
    public String toString() {
        return "Je suis un rectangle : j'ai une longueur de " +  getLongueur() + " cm et une largeur de " + getLargeur() + " cm.";
    }
}