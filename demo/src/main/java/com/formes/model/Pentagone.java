package com.formes.model;


public class Pentagone extends Forme{

    private double cote;


    public Pentagone(double cote, String couleur, double x, double y) {
        super(couleur, y, x);
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
        return (1.0 / 4.0) * Math.sqrt(5 * (5 + 2 * Math.sqrt(5))) * cote * cote;
    }

    @Override
    public double getPerimetre() {
        return 5 * cote;
    }

    @Override
    public String toString() {
        return getType()+ " convexe "+ getCouleur()+" : j'ai 5 côté de " +  getCote() + " cm et mon aire est de " + getAire() + " cm2 et mon périmètre est de " + getPerimetre() + " cm.";
    }
}