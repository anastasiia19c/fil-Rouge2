package com.formes;

public class Cercle {
    private int rayon;

    public Cercle(int rayon) {
        this.rayon = rayon;
    }

    // Getter pour récupérer le rayon
    public int getRayon() {
        return rayon;
    }

    // Setter pour modifier le rayon
    public void setRayon(int rayon) {
        this.rayon = rayon;
    }

    @Override
    public String toString() {
        return "Je suis un cercle : j'ai un rayon de " + getRayon()+ " cm.";
    }
}
