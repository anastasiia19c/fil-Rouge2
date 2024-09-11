package com.formes;

public class Carre extends Formes {
    private double cote;

    public Carre(double cote) {
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
        return cote * cote;
    }

    @Override
    public double getPerimetre() {
        return 4 * cote;
    }

    @Override
    public String toString() {
        return "Je suis un carré : j'ai 4 côtés égaux de " + getCote() +" cm, mon aire est de " + getAire() + " cm² et mon périmètre est de " + getPerimetre() + " cm.";
    }
}