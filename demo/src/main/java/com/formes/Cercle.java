package com.formes;

public class Cercle {
    private int rayon;

    public Cercle(int rayon) {
        this.rayon = rayon;
    }

    public void affiche() {
        System.out.println("Je suis un cercle : j'ai un rayon de " + rayon + " cm.");
    }
}
