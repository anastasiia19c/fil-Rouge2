package com.formes.model;

public class Hexagone extends Forme {

    private double cote;


    public Hexagone(double cote, String couleur, double x, double y) {
        super(couleur, x, y);
        this.cote = cote;
    }

    public double getCote() {
        return cote;
    }

    public void setCote(double cote) {
        this.cote = cote;
    }

    @Override
    public double getAire() {
        return (3.0 * Math.sqrt(3) / 2.0) * cote * cote;
    }

    @Override
    public double getPerimetre() {
        return 6 * cote;
    }

    @Override
    public String toString() {
        return getType() + " convexe "+ getCouleur()+" : j'ai 6 côté de " +  getCote() + " cm et mon aire est de " + getAire() + " cm2 et mon périmètre est de " + getPerimetre() + " cm.";
    }
}
