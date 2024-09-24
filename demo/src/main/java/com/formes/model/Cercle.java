package com.formes.model;

public class Cercle extends Forme {
    private double rayon;

    public Cercle(double rayon, String couleur, double x, double y) {
        super(couleur, x, y);
        this.rayon = rayon;
    }

    public double getRayon() {
        return rayon;
    }

    public void setRayon(double rayon) {
        this.rayon = rayon;
    }

    @Override
    public double getAire() {
        return Math.PI * rayon * rayon;
    }
    
    @Override
    public double getPerimetre() {
        return 2 * Math.PI * rayon;
    }

    @Override
    public String toString() {
        return getType()+ " "+ getCouleur()+" : j'ai un rayon de " + getRayon()+ " cm, mon aire est de "+ getAire() + "cm2 et mon périmètre est de "+ getPerimetre()+" cm.";
    }
}
