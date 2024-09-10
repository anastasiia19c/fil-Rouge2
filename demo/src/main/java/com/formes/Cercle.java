package com.formes;

public class Cercle extends Formes {
    private int rayon;

    public Cercle(int rayon) {
        this.rayon = rayon;
    }

    public int getRayon() {
        return rayon;
    }

    public void setRayon(int rayon) {
        this.rayon = rayon;
    }

    @Override
    public String toString() {
        return "Je suis un cercle : j'ai un rayon de " + getRayon()+ " cm.";
    }
}
