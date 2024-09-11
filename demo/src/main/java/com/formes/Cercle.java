package com.formes;

public class Cercle extends Formes {
    private double rayon;

    public Cercle(double rayon) {
        this.rayon = rayon;
    }

    public double getRayon() {
        return rayon;
    }

    public void setRayon(double rayon) {
        this.rayon = rayon;
    }

    @Override
    public double calculerAire() {
        return Math.PI * rayon * rayon;
    }
    
    @Override
    public double calculerPerimetre() {
        return 2 * Math.PI * rayon;
    }

    @Override
    public String toString() {
        return "Je suis un cercle : j'ai un rayon de " + getRayon()+ " cm, mon aire est de "+ calculerAire() + "cm2 et mon périmètre est de "+ calculerPerimetre()+" cm.";
    }
}
